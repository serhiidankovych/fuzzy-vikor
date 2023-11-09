import { SET_NUMBER } from "../actions/numberConfigurationActions";

const initialState = {
  numberOfAlternatives: 4,
  numberOfCriteria: 8,
  numberOfLinguisticTermsForAlternatives: 5,
  numberOfLinguisticTermsForCriteria: 5,
  numberOfExperts: 3,
};

const numberConfigurationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER:
      return {
        ...state,
        numberOfAlternatives: action.payload.numberOfAlternatives,
        numberOfCriteria: action.payload.numberOfCriteria,
        numberOfLinguisticTermsForAlternatives:
          action.payload.numberOfLinguisticTermsForAlternatives,
        numberOfLinguisticTermsForCriteria:
          action.payload.numberOfLinguisticTermsForCriteria,
        numberOfExperts: action.payload.numberOfExperts,
      };
    default:
      return state;
  }
};

export default numberConfigurationReducer;
