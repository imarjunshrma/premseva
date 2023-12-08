import {LOCATION} from './action';

const initialState = {
  locationData: {},
};
const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION:
      return {
        ...state,
        locationData: action.payload,
      };
    default:
      return state;
  }
};
export default locationReducer;
