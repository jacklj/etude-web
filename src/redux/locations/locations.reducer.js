import { ACTION_TYPES } from './locations.actions';
// import { ACTION_TYPES as eventActionTypes } from '../actions/events.actions';
// import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

const initialState = {
  // locations: {},
  fetching: false,
};

const locations = (state = initialState, action) => {
  switch (action.type) {
    // case eventActionTypes.EVENT.FETCH_ALL.SUCCESS:
    //   if (ifObjectExistsAndIsNotEmpty(action.payload.locations)) {
    //     return {
    //       ...state,
    //       locations: {
    //         ...state.locations,
    //         ...action.payload.locations,
    //       },
    //     };
    //   }
    //   return state;
    case ACTION_TYPES.LOCATIONS_FETCH.REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case ACTION_TYPES.LOCATIONS_FETCH.SUCCESS:
      return {
        // locations: action.locations,
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
