export const SET_NUMBER = "SET_NUMBER";
export const setNumberConfiguration = (
  numberOfAlternatives,
  numberOfCriteria,
  numberOfLinguisticTermsForAlternatives,
  numberOfLinguisticTermsForCriteria,
  numberOfExperts
) => {
  return {
    type: "SET_NUMBER",
    payload: {
      numberOfAlternatives,
      numberOfCriteria,
      numberOfLinguisticTermsForAlternatives,
      numberOfLinguisticTermsForCriteria,
      numberOfExperts,
    },
  };
};
