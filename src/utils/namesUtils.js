const checkNames = (names, showToastMessage) => {
  let isValid = true;

  names.alternativeNames.forEach((alternative) => {
    if (alternative === "") {
      showToastMessage("Please enter a name", "error");
      isValid = false;
      return;
    }
  });

  return isValid;
};

const generateLinguisticTerms = (
  names,
  type,
  key,
  generatedTriangularValues
) => {
  const generatedLinguisticTerms = [];

  for (let i = 0; i < names[key]?.length; i++) {
    generatedLinguisticTerms.push({
      id: i,
      linguisticTerm: names[key][i],
      confines: generatedTriangularValues[i],
      type: type,
    });
  }

  return generatedLinguisticTerms;
};

function updateCriteria(criteria, names) {
  return criteria.criteriaLinguisticTerms.map((criterion, index) => {
    return {
      ...criterion,
      linguisticTerm: names.linguisticTermsForCriteriaNames[index],
    };
  });
}

function updateAlternatives(alternatives, names) {
  return alternatives.alternativeLinguisticTerms.map((criterion, index) => {
    return {
      ...criterion,
      linguisticTerm: names.linguisticTermsForAlternativesNames[index],
    };
  });
}

function updateExpertsEstimations(expertsEstimation, names) {
  return Object.keys(expertsEstimation.expertsEstimation).reduce(
    (result, estimation) => {
      const currentEstimation = expertsEstimation.expertsEstimation[estimation];
      const updatedData = {
        ...currentEstimation.data,
        linguisticTerm:
          names.linguisticTermsForAlternativesNames[currentEstimation.data.id],
      };

      result[estimation] = {
        data: updatedData,
        alternative: currentEstimation.alternative,
        criteria: currentEstimation.criteria,
        expertId: currentEstimation.expertId,
      };

      return result;
    },
    {}
  );
}

function updateCriteriaEstimations(criteriaEstimation, names) {
  const updatedCriteriaEstimations = {};

  Object.keys(criteriaEstimation.criteriaEstimation).forEach((estimation) => {
    const currentEstimation = criteriaEstimation.criteriaEstimation[estimation];
    const updatedLinguisticTerm =
      names.linguisticTermsForCriteriaNames[currentEstimation.id];

    updatedCriteriaEstimations[estimation] = {
      ...currentEstimation,
      linguisticTerm: updatedLinguisticTerm,
    };
  });

  return updatedCriteriaEstimations;
}
export {
  checkNames,
  generateLinguisticTerms,
  updateCriteria,
  updateAlternatives,
  updateExpertsEstimations,
  updateCriteriaEstimations,
};
