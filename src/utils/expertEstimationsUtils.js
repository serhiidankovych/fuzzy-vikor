const generateExpertEstimations = (
  expertNumbers,
  alternativeNumbers,
  criteriaNumbers
) => {
  const generatedExpertEstimations = {};

  for (let i = 0; i < expertNumbers; i++) {
    for (let j = 0; j < alternativeNumbers; j++) {
      for (let y = 0; y < criteriaNumbers; y++) {
        const key = `e${i + 1}-a${j + 1}-c${y + 1}`;
        generatedExpertEstimations[key] = {
          data: {
            id: 0,
            linguisticTerm: "",
            confines: [0, 0, 0],
            normalizedConfines: [0, 0, 0],
          },
          criteria: y + 1,
          alternative: j + 1,
          expertId: i + 1,
        };
      }
    }
  }

  return generatedExpertEstimations;
};

const findMinValue = (arr) => {
  return Math.min(...arr);
};
const findMinValues = (data) => {
  const minValues = {};
  for (const key in data) {
    minValues[key] = findMinValue(data[key]);
  }
  return minValues;
};

const findMaxValue = (arr) => {
  return Math.max(...arr);
};
const findMaxValues = (data) => {
  const minValues = {};
  for (const key in data) {
    minValues[key] = findMaxValue(data[key]);
  }
  return minValues;
};

const calculatePerformanceRating = (confines, experts) => {
  const multiplyConfines = confines.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);

  return Math.pow(multiplyConfines, 1 / experts);
};

const getAlternativesIntervalValuedNumbers = (estimation, experts) => {
  const intervalValuedNumbers = {};

  const leftConfines = {};
  const middleConfines = {};
  const rightConfines = {};

  const leftPerformanceRating = {};
  const middlePerformanceRating = {};
  const rightPerformanceRating = {};

  Object.keys(estimation).forEach((itemId) => {
    estimation[itemId].data.forEach((item) => {
      const left = item.normalizedConfines[0];
      const middle = item.normalizedConfines[1];
      const right = item.normalizedConfines[2];

      const criteriaKey = itemId;

      if (!leftConfines[criteriaKey]) {
        leftConfines[criteriaKey] = [];
      }

      if (!rightConfines[criteriaKey]) {
        rightConfines[criteriaKey] = [];
      }
      if (!middleConfines[criteriaKey]) {
        middleConfines[criteriaKey] = [];
      }

      leftConfines[criteriaKey].push(left);
      middleConfines[criteriaKey].push(middle);
      rightConfines[criteriaKey].push(right);

      if (!leftPerformanceRating[criteriaKey]) {
        leftPerformanceRating[criteriaKey] = [];
      }

      if (!middlePerformanceRating[criteriaKey]) {
        middlePerformanceRating[criteriaKey] = [];
      }
      if (!rightPerformanceRating[criteriaKey]) {
        rightPerformanceRating[criteriaKey] = [];
      }

      leftPerformanceRating[criteriaKey] = calculatePerformanceRating(
        leftConfines[criteriaKey],
        experts
      );
      middlePerformanceRating[criteriaKey] = calculatePerformanceRating(
        middleConfines[criteriaKey],
        experts
      );
      rightPerformanceRating[criteriaKey] = calculatePerformanceRating(
        rightConfines[criteriaKey],
        experts
      );
    });

    return intervalValuedNumbers;
  });
  const minLeftConfines = findMinValues(leftConfines);
  const maxRightConfines = findMaxValues(rightConfines);

  Object.keys(minLeftConfines).forEach((itemId) => {
    intervalValuedNumbers[itemId] = [
      minLeftConfines[itemId],
      leftPerformanceRating[itemId],
      middlePerformanceRating[itemId],
      rightPerformanceRating[itemId],
      maxRightConfines[itemId],
    ];
  });

  return intervalValuedNumbers;
};

const getCriteriaIntervalValuedNumbers = (estimation, experts) => {
  const intervalValuedNumbers = {};
  const leftConfines = {};
  const middleConfines = {};
  const rightConfines = {};

  const leftPerformanceRating = {};
  const middlePerformanceRating = {};
  const rightPerformanceRating = {};

  Object.keys(estimation).forEach((itemId) => {
    const currentItem = estimation[itemId];

    const left = currentItem.normalizedConfines[0];
    const middle = currentItem.normalizedConfines[1];
    const right = currentItem.normalizedConfines[2];

    const key = itemId.split("-");
    const criteriaKey = key[1];

    if (!leftConfines[criteriaKey]) {
      leftConfines[criteriaKey] = [];
    }

    if (!rightConfines[criteriaKey]) {
      rightConfines[criteriaKey] = [];
    }
    if (!middleConfines[criteriaKey]) {
      middleConfines[criteriaKey] = [];
    }

    leftConfines[criteriaKey].push(left);
    middleConfines[criteriaKey].push(middle);
    rightConfines[criteriaKey].push(right);

    if (!leftPerformanceRating[criteriaKey]) {
      leftPerformanceRating[criteriaKey] = [];
    }

    if (!middlePerformanceRating[criteriaKey]) {
      middlePerformanceRating[criteriaKey] = [];
    }
    if (!rightPerformanceRating[criteriaKey]) {
      rightPerformanceRating[criteriaKey] = [];
    }

    leftPerformanceRating[criteriaKey] = calculatePerformanceRating(
      leftConfines[criteriaKey],
      experts
    );
    middlePerformanceRating[criteriaKey] = calculatePerformanceRating(
      middleConfines[criteriaKey],
      experts
    );
    rightPerformanceRating[criteriaKey] = calculatePerformanceRating(
      rightConfines[criteriaKey],
      experts
    );
  });

  const minLeftConfines = findMinValues(leftConfines);
  const maxRightConfines = findMaxValues(rightConfines);

  Object.keys(minLeftConfines).forEach((itemId) => {
    intervalValuedNumbers[itemId] = [
      minLeftConfines[itemId],
      leftPerformanceRating[itemId],
      middlePerformanceRating[itemId],
      rightPerformanceRating[itemId],
      maxRightConfines[itemId],
    ];
  });

  return intervalValuedNumbers;
};

const aggregateEstimations = (selectedItems) => {
  const aggregatedEstimations = {};
  for (const key in selectedItems) {
    const item = selectedItems[key];
    const { alternative, criteria, expertId, data } = item;
    const aggregationKey = `a${alternative}-c${criteria}`;

    // Create the aggregation key if it doesn't exist
    if (!aggregatedEstimations[aggregationKey]) {
      aggregatedEstimations[aggregationKey] = {
        alternative: alternative,
        criteria: criteria,
        experts: [expertId],
        data: [data],
      };
    } else {
      // If the aggregation key already exists, push the data to the existing object
      aggregatedEstimations[aggregationKey].experts.push(expertId);
      aggregatedEstimations[aggregationKey].data.push(data);
    }
  }
  return aggregatedEstimations;
};

const getCriteriaOptimalValue = (alternativesIntervalValuedNumbers, maxMin) => {
  const criteriaValues = {};
  const criteriaOptimalValues = {};

  Object.keys(alternativesIntervalValuedNumbers).forEach((itemId) => {
    const currentItem = alternativesIntervalValuedNumbers[itemId];
    const [_, criteriaKey] = itemId.split("-");

    criteriaValues[criteriaKey] = criteriaValues[criteriaKey] || [];
    criteriaValues[criteriaKey].push(currentItem);
  });

  Object.keys(criteriaValues).forEach((criteriaKey) => {
    const currentItem = criteriaValues[criteriaKey];
    const isMax = maxMin[criteriaKey] === "Max";

    const optimalValue = currentItem[0].map((_, colIndex) =>
      isMax
        ? Math.max(...currentItem.map((row) => row[colIndex]))
        : Math.min(...currentItem.map((row) => row[colIndex]))
    );

    criteriaOptimalValues[criteriaKey] = optimalValue;
  });

  return criteriaOptimalValues;
};

const getAlternativesOptimalValue = (
  alternativesIntervalValuedNumbers,
  criteriaOptimalValuedNumbers,
  maxMin
) => {
  const alternativesValues = {};
  Object.keys(alternativesIntervalValuedNumbers).forEach((itemId) => {
    const currentItem = alternativesIntervalValuedNumbers[itemId];
    const [_, criteriaKey] = itemId.split("-");

    alternativesValues[criteriaKey] = alternativesValues[criteriaKey] || [];
    alternativesValues[criteriaKey].push(currentItem);
  });

  Object.keys(alternativesValues).forEach((itemId) => {
    const currentItem = alternativesValues[itemId];
    currentItem.unshift(criteriaOptimalValuedNumbers[itemId]);
  });

  const sumLastElements = {};

  for (const key in alternativesValues) {
    const subArrays = alternativesValues[key];
    const lastElementsSum = subArrays.reduce((acc, subArray) => {
      const lastElement = subArray[subArray.length - 1];
      return acc + lastElement;
    }, 0);
    sumLastElements[key] = lastElementsSum;
  }
  const reversedAlternativesValues = {};

  for (const key in alternativesValues) {
    const subArrays = alternativesValues[key];
    const elementsReversed = subArrays.map((subArray) => {
      return subArray.map((element) => {
        return 1 / element;
      });
    });

    reversedAlternativesValues[key] = elementsReversed;
  }

  const sumFirstElements = {};
  for (const key in reversedAlternativesValues) {
    const subArrays = reversedAlternativesValues[key];
    const firstElementsSum = subArrays.reduce((acc, subArray) => {
      const firstElement = subArray[0];
      return acc + firstElement;
    }, 0);
    sumFirstElements[key] = firstElementsSum;
  }

  const normalizedValues = {};

  for (const key in alternativesValues) {
    let subArrays =
      maxMin[key] === "Max"
        ? alternativesValues[key]
        : reversedAlternativesValues[key];

    const elementsNormalized = subArrays.map((subArray) => {
      return subArray.map((element) => {
        const divisor =
          maxMin[key] === "Max" ? sumLastElements[key] : sumFirstElements[key];
        return element / divisor;
      });
    });

    normalizedValues[key] = elementsNormalized;
  }

  return normalizedValues;
};

const getNormalizedWeightedMatrix = (
  criteriaIntervalValuedNumbers,
  normalizedMatrix
) => {
  const normalizedWeightedMatrix = {};

  for (const key in normalizedMatrix) {
    const subArrays = normalizedMatrix[key];
    const elementsNormalizedWeighted = subArrays.map((subArray) => {
      return subArray.map((element, index) => {
        return element * criteriaIntervalValuedNumbers[key][index];
      });
    });

    normalizedWeightedMatrix[key] = elementsNormalizedWeighted;
  }
  return normalizedWeightedMatrix;
};

const getPerfomanceRatings = (normalizedWeightedMatrix) => {
  const keys = Object.keys(normalizedWeightedMatrix);
  const numberOfSubarrays = normalizedWeightedMatrix[keys[0]].length;
  const sameAlternatives = [];

  for (let i = 0; i < numberOfSubarrays; i++) {
    const subarray = keys.map((key) => normalizedWeightedMatrix[key][i]);
    sameAlternatives.push(subarray);
  }

  const perfomanceRatings = {};
  sameAlternatives.forEach((subarray, index) => {
    const resultSum = subarray.reduce((a, b) => a.map((c, i) => c + b[i]));
    perfomanceRatings[`a${index + 1}`] = resultSum;
  });

  return perfomanceRatings;
};

const getWeightedAverageDefuzzification = (perfomanceRatings) => {
  const defuzzifiedRatings = {};
  for (const key in perfomanceRatings) {
    const subArrays = perfomanceRatings[key];
    const defuzzifiedRating = subArrays.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    defuzzifiedRatings[key] = defuzzifiedRating / 5;
  }
  return defuzzifiedRatings;
};

const getUtilityDegree = (defuzzifiedRatings) => {
  const UtilityDegrees = {};

  const optimalValue = defuzzifiedRatings["a1"];
  Object.keys(defuzzifiedRatings).forEach((key) => {
    UtilityDegrees[key] = defuzzifiedRatings[key] / optimalValue;
  });

  return UtilityDegrees;
};
export {
  generateExpertEstimations,
  getCriteriaIntervalValuedNumbers,
  getAlternativesIntervalValuedNumbers,
  aggregateEstimations,
  getCriteriaOptimalValue,
  getAlternativesOptimalValue,
  getNormalizedWeightedMatrix,
  getPerfomanceRatings,
  getWeightedAverageDefuzzification,
  getUtilityDegree,
};
