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

    let best;
    let worst;
    if (optimization[key] === "Max") {
      best = [maxFirstElement, maxMiddleElement, maxLastElement];
      worst = [minFirstElement, minMiddleElement, minLastElement];
    } else {
      best = [minFirstElement, minMiddleElement, minLastElement];
      worst = [maxFirstElement, maxMiddleElement, maxLastElement];
    }

    bestWorstCriteria[key] = {
      best,
      worst,
    };
  }
  return bestWorstCriteria;
};

export { groupEstimations, getFuzzySyntheticMeasure, getBestWorstCriteria };
