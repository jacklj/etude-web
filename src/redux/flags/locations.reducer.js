import { actionTypes as locationsActionTypes } from '../locations/locations.actions';

const initialState = {
  fetchingLocations: false,
  creatingLocation: false,
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
    case locationsActionTypes.LOCATIONS.CREATE.REQUEST:
      return {
        ...state,
        creatingLocation: true,
      };
    case locationsActionTypes.LOCATIONS.CREATE.SUCCESS:
      return {
        ...state,
        creatingLocation: false,
      };
    case locationsActionTypes.LOCATIONS.CREATE.FAILURE:
      return {
        ...state,
        creatingLocation: false,
      };
    default:
      return state;
  }
};

export default flagsReducer;
