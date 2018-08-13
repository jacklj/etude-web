import { ACTION_TYPES } from './locations.actions';

const initialState = {
  locations: [],
  fetching: false,
};

const locations = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOCATIONS_FETCH.REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case ACTION_TYPES.LOCATIONS_FETCH.SUCCESS:
      return {
        locations: action.locations,
        fetching: false,
      };
    case ACTION_TYPES.LOCATIONS_FETCH.FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};

export default locations;
