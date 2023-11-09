import { SET_MAX_MIN } from "../actions/maxMinConfigurationActions";

const initialState = {
  maxMin: {},
};

const maxMinConfigurationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAX_MIN:
      return {
        ...state,
        maxMin: action.payload,
      };
    default:
      return state;
  }
};

export default maxMinConfigurationReducer;
