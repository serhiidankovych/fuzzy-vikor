const groupEstimations = (selectedItems, type) => {
  const groupedEstimations = {};
  for (const key in selectedItems) {
    const item = selectedItems[key];
    const { alternative, criteria, expertId, linguisticTermId } = item;
    const aggregationKey =
      type === "alternatives" ? `a${alternative}-c${criteria}` : `c${criteria}`;

    // Create the aggregation key if it doesn't exist
    if (!groupedEstimations[aggregationKey]) {
      groupedEstimations[aggregationKey] = {
        linguisticTermsId: [{ ...item }],
      };
    } else {
      // If the aggregation key already exists, push the linguisticTermId to the existing object
      groupedEstimations[aggregationKey].linguisticTermsId.push(item);
    }
  }

  return groupedEstimations;
};

const getFuzzySyntheticMeasure = (groupedEstimations, linguisticTerms) => {
  const fuzzySyntheticMeasure = {};

  for (const key in groupedEstimations) {
    const item = groupedEstimations[key];
    const { linguisticTermsId } = item;

    const normalizedConfines = [];

    linguisticTermsId.forEach((linguisticTermId) => {
      normalizedConfines.push(
        linguisticTerms[linguisticTermId.linguisticTermId].normalizedConfines
      );
    });

    // Extract first and last elements from each subarray
    const leftElements = normalizedConfines.map((subarray) => subarray[0]);
    const middleElements = normalizedConfines.map((subarray) => subarray[1]);
    const rightElements = normalizedConfines.map((subarray) => subarray[2]);

    // Find the minimum of the first elements and the maximum of the last elements
    const minFirstElement = Math.min(...leftElements);
    const maxLastElement = Math.max(...rightElements);

    const sumMiddleElements = middleElements.reduce((a, c) => a + c, 0);
    const avgMiddleElement = sumMiddleElements / middleElements.length;

    fuzzySyntheticMeasure[key] = [
      minFirstElement,
      avgMiddleElement,
      maxLastElement,
    ];
  }

  return fuzzySyntheticMeasure;
};

const groupCriteria = (fuzzySyntheticMeasure) => {
  const groupCriteria = {};
  for (const key in fuzzySyntheticMeasure) {
    const item = fuzzySyntheticMeasure[key];
    const [, aggregationKey] = key.split("-");
    if (!groupCriteria[aggregationKey]) {
      groupCriteria[aggregationKey] = [];
    }
    groupCriteria[aggregationKey].push(item);
  }
  return groupCriteria;
};

const getBestWorstCriteria = (fuzzySyntheticMeasure, optimization) => {
  const bestWorstCriteria = {};

  const groupedfuzzySyntheticMeasure = groupCriteria(fuzzySyntheticMeasure);
  for (const key in groupedfuzzySyntheticMeasure) {
    const item = groupedfuzzySyntheticMeasure[key];

    const leftElements = item.map((subarray) => subarray[0]);
    const middleElements = item.map((subarray) => subarray[1]);
    const rightElements = item.map((subarray) => subarray[2]);

    const minFirstElement = Math.min(...leftElements);
    const minMiddleElement = Math.min(...middleElements);
    const minLastElement = Math.min(...rightElements);

    const maxFirstElement = Math.max(...leftElements);
    const maxMiddleElement = Math.max(...middleElements);
    const maxLastElement = Math.max(...rightElements);

    const [best, worst] =
      optimization[key] === "Max"
        ? [
            [maxFirstElement, maxMiddleElement, maxLastElement],
            [minFirstElement, minMiddleElement, minLastElement],
          ]
        : [
            [minFirstElement, minMiddleElement, minLastElement],
            [maxFirstElement, maxMiddleElement, maxLastElement],
          ];
    bestWorstCriteria[key] = { best, worst };
  }
  return bestWorstCriteria;
};

const getNormalizedFuzzyDifference = (
  bestWorstCriteria,
  fuzzyAlternativesSyntheticMeasure,
  optimization
) => {
  const normalizedFuzzyDifference = {};
  for (const [key, fuzzyAlternativeSyntheticMeasure] of Object.entries(
    fuzzyAlternativesSyntheticMeasure
  )) {
    const [, criteriaKey] = key.split("-");
    const bestWorstCriterion = bestWorstCriteria[criteriaKey];
    const fuzzyDifference =
      optimization[criteriaKey] === "Max"
        ? [
            bestWorstCriterion.best[0] - fuzzyAlternativeSyntheticMeasure[2],
            bestWorstCriterion.best[1] - fuzzyAlternativeSyntheticMeasure[1],
            bestWorstCriterion.best[2] - fuzzyAlternativeSyntheticMeasure[0],
          ]
        : [
            fuzzyAlternativeSyntheticMeasure[0] - bestWorstCriterion.best[2],
            fuzzyAlternativeSyntheticMeasure[1] - bestWorstCriterion.best[1],
            fuzzyAlternativeSyntheticMeasure[2] - bestWorstCriterion.best[0],
          ];

    const bestWorstDifference =
      optimization[criteriaKey] === "Max"
        ? bestWorstCriterion.best[2] - bestWorstCriterion.worst[0]
        : bestWorstCriterion.worst[2] - bestWorstCriterion.best[0];

    let normalized = fuzzyDifference.map(
      (value) => value / bestWorstDifference
    );

    normalizedFuzzyDifference[key] = normalized;
  }

  return normalizedFuzzyDifference;
};

const transposeArray = (array) => {
  const rows = array.length;
  const columns = array[0].length;
  const transposedArray = [];
  for (let j = 0; j < columns; j++) {
    transposedArray[j] = [];
    for (let i = 0; i < rows; i++) {
      transposedArray[j][i] = array[i][j];
    }
  }
  return transposedArray;
};

const sumArraysByIndex = (arrays) => {
  return arrays.reduce(
    (acc, curr) => curr.map((num, i) => acc[i] + num),
    Array.from({ length: arrays[0].length }, () => 0)
  );
};

const getSeparationMeasures = (
  normalizedFuzzyDifference,
  fuzzyCriteriaSyntheticMeasure
) => {
  const groupedNormalizedFuzzyDifference = groupCriteria(
    normalizedFuzzyDifference
  );

  const multiplication = {};

  for (const key in groupedNormalizedFuzzyDifference) {
    const item = groupedNormalizedFuzzyDifference[key];
    const weight = fuzzyCriteriaSyntheticMeasure[key];

    multiplication[key] = item.map((difference) =>
      difference.map((value, i) => value * weight[i])
    );
  }

  const transposedMultiplication = transposeArray(
    Object.values(multiplication)
  );

  const sum = {};
  transposedMultiplication.forEach((row, index) => {
    sum[`a${index + 1}`] = sumArraysByIndex(row);
  });

  const max = {};
  transposedMultiplication.forEach((row, index) => {
    const leftElements = row.map((subarray) => subarray[0]);
    const middleElements = row.map((subarray) => subarray[1]);
    const rightElements = row.map((subarray) => subarray[2]);
    const maxFirstElement = Math.max(...leftElements);
    const maxMiddleElement = Math.max(...middleElements);
    const maxLastElement = Math.max(...rightElements);
    max[`a${index + 1}`] = [maxFirstElement, maxMiddleElement, maxLastElement];
  });
  const separationMeasures = {
    sum,
    max,
  };

  return separationMeasures;
};

export {
  groupEstimations,
  getFuzzySyntheticMeasure,
  getBestWorstCriteria,
  getNormalizedFuzzyDifference,
  getSeparationMeasures,
};
