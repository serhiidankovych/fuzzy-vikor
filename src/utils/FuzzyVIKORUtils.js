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
    console.log(linguisticTermsId);
    linguisticTermsId.forEach((linguisticTermId) => {
      normalizedConfines.push(
        linguisticTerms[linguisticTermId.linguisticTermId].normalizedConfines
      );
    });
    console.log(normalizedConfines);
    // Extract first and last elements from each subarray
    const leftElements = normalizedConfines.map((subarray) => subarray[0]);
    const middleElements = normalizedConfines.map((subarray) => subarray[1]);
    const rightElements = normalizedConfines.map((subarray) => subarray[2]);

    // Find the minimum of the first elements and the maximum of the last elements
    const minFirstElement = Math.min(...leftElements);
    const maxLastElement = Math.max(...rightElements);

    const sumMiddleElements = middleElements.reduce((a, c) => a + c, 0);
    const avgMiddleElement = sumMiddleElements / middleElements.length;

    console.log(`Minimum of first elements: ${minFirstElement}`);
    console.log(`Average of middle elements: ${avgMiddleElement}`);
    console.log(`Maximum of last elements: ${maxLastElement}`);
    fuzzySyntheticMeasure[key] = [
      minFirstElement,
      avgMiddleElement,
      maxLastElement,
    ];
  }
  console.log(fuzzySyntheticMeasure);
  return fuzzySyntheticMeasure;
};

export { groupEstimations, getFuzzySyntheticMeasure };
