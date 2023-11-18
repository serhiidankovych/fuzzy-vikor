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

const getComprehensiveScore = (separationMeasures, weightParameter) => {
  const comprehensiveScore = {};
  const { sum, max } = separationMeasures;
  let sumMin = [];
  let sumMinLeft;
  let sumMaxRight;

  let maxMin = [];
  let maxMinLeft;
  let maxMaxRight;

  const sumArray = Object.values(sum);
  const maxArray = Object.values(max);

  const leftSumElements = sumArray.map((subarray) => subarray[0]);
  const middleSumElements = sumArray.map((subarray) => subarray[1]);
  const rightSumElements = sumArray.map((subarray) => subarray[2]);

  const leftMaxElements = maxArray.map((subarray) => subarray[0]);
  const middleMaxElements = maxArray.map((subarray) => subarray[1]);
  const rightMaxElements = maxArray.map((subarray) => subarray[2]);

  const minSumFirstElement = Math.min(...leftSumElements);
  const minSumMiddleElement = Math.min(...middleSumElements);
  const minSumLastElement = Math.min(...rightSumElements);
  const maxSumLastElement = Math.max(...rightSumElements);

  const minMaxFirstElement = Math.min(...leftMaxElements);
  const minMaxMiddleElement = Math.min(...middleMaxElements);
  const minMaxLastElement = Math.min(...rightMaxElements);
  const maxMaxLastElement = Math.max(...rightMaxElements);

  sumMin = [minSumFirstElement, minSumMiddleElement, minSumLastElement];
  sumMinLeft = minSumFirstElement;
  sumMaxRight = maxSumLastElement;

  maxMin = [minMaxFirstElement, minMaxMiddleElement, minMaxLastElement];
  maxMinLeft = minMaxFirstElement;
  maxMaxRight = maxMaxLastElement;

  for (const key in separationMeasures.sum) {
    const sumMeasures = separationMeasures.sum[key];
    const maxMeasures = separationMeasures.max[key];

    const sumDifference = [
      sumMeasures[0] - sumMin[2],
      sumMeasures[1] - sumMin[1],
      sumMeasures[2] - sumMin[0],
    ];
    const sumRightLeftDifference = sumMaxRight - sumMinLeft;

    const sumDivision = [
      sumDifference[0] / sumRightLeftDifference,
      sumDifference[1] / sumRightLeftDifference,
      sumDifference[2] / sumRightLeftDifference,
    ];

    const sumWeightMultiplication = [
      sumDivision[0] * weightParameter,
      sumDivision[1] * weightParameter,
      sumDivision[2] * weightParameter,
    ];

    const maxDifference = [
      maxMeasures[0] - maxMin[2],
      maxMeasures[1] - maxMin[1],
      maxMeasures[2] - maxMin[0],
    ];
    const maxRightLeftDifference = maxMaxRight - maxMinLeft;

    const maxDivision = [
      maxDifference[0] / maxRightLeftDifference,
      maxDifference[1] / maxRightLeftDifference,
      maxDifference[2] / maxRightLeftDifference,
    ];

    const maxWeightMultiplication = [
      maxDivision[0] * (1 - weightParameter),
      maxDivision[1] * (1 - weightParameter),
      maxDivision[2] * (1 - weightParameter),
    ];
    const additionMeasures = [
      sumWeightMultiplication[0] + maxWeightMultiplication[0],
      sumWeightMultiplication[1] + maxWeightMultiplication[1],
      sumWeightMultiplication[2] + maxWeightMultiplication[2],
    ];
    comprehensiveScore[key] = additionMeasures;
  }

  return comprehensiveScore;
};

const getDefuzzificationByCentroidMethod = (
  separationMeasures,
  comprehensiveScore
) => {
  const { sum, max } = separationMeasures;

  const centroid = (left, middle, right) => {
    return (left + 2 * middle + right) / 4;
  };
  const defuzzify = (values) =>
    Object.fromEntries(
      Object.entries(values).map(([key, [left, middle, right]]) => [
        key,
        centroid(left, middle, right),
      ])
    );

  const defuzzificationValues = {
    defuzzifiedSum: defuzzify(sum),
    defuzzifiedMax: defuzzify(max),
    defuzzifiedComprehensiveScore: defuzzify(comprehensiveScore),
  };

  return defuzzificationValues;
};

const addComparisonSymbols = (rankedValues) => {
  for (let i = 0; i < rankedValues.length - 1; i++) {
    const currentRank = rankedValues[i][1];
    const nextRank = rankedValues[i + 1][1];

    rankedValues[i].push(currentRank === nextRank ? "=" : ">");
  }

  rankedValues[rankedValues.length - 1].push(" ");
  return rankedValues;
};

const getRankAlternatives = (defuzzifiedValues) => {
  const { defuzzifiedSum, defuzzifiedMax, defuzzifiedComprehensiveScore } =
    defuzzifiedValues;
  const rankedSum = Object.entries(defuzzifiedSum);
  const rankedMax = Object.entries(defuzzifiedMax);
  const rankedScore = Object.entries(defuzzifiedComprehensiveScore);
  rankedSum.sort((a, b) => a[1] - b[1]);
  rankedMax.sort((a, b) => a[1] - b[1]);
  rankedScore.sort((a, b) => a[1] - b[1]);

  const rankedAlternatives = {
    rankedSum: addComparisonSymbols(rankedSum),
    rankedMax: addComparisonSymbols(rankedMax),
    rankedScore: addComparisonSymbols(rankedScore),
  };

  return rankedAlternatives;
};

const getCompromiseSolutions = (rankedAlternatives, numberOfAlternatives) => {
  //Acceptable advantage
  let acceptableAdvantageCondition = false;
  const firstRankedAlternativeScore = rankedAlternatives.rankedScore[0][1];
  const secondRankedAlternativeScore = rankedAlternatives.rankedScore[1][1];
  const acceptableAdvantage =
    secondRankedAlternativeScore - firstRankedAlternativeScore;

  const discriminationPowerFactor = 1 / (numberOfAlternatives - 1);

  if (acceptableAdvantage >= discriminationPowerFactor) {
    acceptableAdvantageCondition = true;
  }

  const acceptableAdvantageAlternatives = [
    rankedAlternatives.rankedScore[0],
    rankedAlternatives.rankedScore[1],
  ];

  //Acceptable stability
  let acceptableStabilityCondition = false;
  const firstRankedAlternativeScoreKey = rankedAlternatives.rankedScore[0][0];
  const firstRankedAlternativeSumKey = rankedAlternatives.rankedSum[0][0];
  const firstRankedAlternativeMaxKey = rankedAlternatives.rankedMax[0][0];

  if (
    firstRankedAlternativeScoreKey === firstRankedAlternativeSumKey ||
    firstRankedAlternativeScoreKey === firstRankedAlternativeMaxKey
  ) {
    acceptableStabilityCondition = true;
  }
  const lastRankedAlternativeScore =
    rankedAlternatives.rankedScore[
      rankedAlternatives.rankedScore.length - 1
    ][1];

  const acceptableStabilityAlternatives = [];
  const differenceFirstScore = [];
  const differenceFirstScoreCondition = [];
  for (let i = 0; i < rankedAlternatives.rankedScore.length; i++) {
    const currentAlternativeScore = rankedAlternatives.rankedScore[i][1];
    const currentDifference =
      currentAlternativeScore - firstRankedAlternativeScore;
    differenceFirstScore.push(currentDifference);

    if (currentDifference < discriminationPowerFactor) {
      acceptableStabilityAlternatives.push(rankedAlternatives.rankedScore[i]);
      differenceFirstScoreCondition.push(true);
    } else {
      differenceFirstScoreCondition.push(false);
    }
  }

  const compromiseSolutions = {
    acceptableAdvantage,
    discriminationPowerFactor,
    acceptableAdvantageCondition,
    acceptableStabilityCondition,
    acceptableAdvantageAlternatives,
    acceptableStabilityAlternatives,
    firstRankedAlternativeScore: rankedAlternatives.rankedScore[0],
    firstRankedAlternativeSum: rankedAlternatives.rankedSum[0],
    firstRankedAlternativeMax: rankedAlternatives.rankedMax[0],
    differenceFirstScore,
    differenceFirstScoreCondition,
  };

  return compromiseSolutions;
};

export {
  groupEstimations,
  getFuzzySyntheticMeasure,
  getBestWorstCriteria,
  getNormalizedFuzzyDifference,
  getSeparationMeasures,
  getComprehensiveScore,
  getDefuzzificationByCentroidMethod,
  getRankAlternatives,
  getCompromiseSolutions,
};
