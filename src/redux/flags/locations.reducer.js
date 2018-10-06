import { actionTypes as locationsActionTypes } from '../locations/locations.actions';

const initialState = {
  fetchingLocations: false,
};

const flagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case locationsActionTypes.LOCATIONS.GET_ALL.REQUEST:
      return {
        ...state,
        fetchingLocations: true,
      };
    case locationsActionTypes.LOCATIONS.GET_ALL.SUCCESS:
      return {
        ...state,
        fetchingLocations: false,
      };
    case locationsActionTypes.LOCATIONS.GET_ALL.FAILURE:
      return {
        ...state,
        fetchingLocations: false,
      };
    default:
      return state;
  }
};

export default flagsReducer;
