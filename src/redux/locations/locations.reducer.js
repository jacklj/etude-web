import { actionTypes } from './locations.actions';
// import { actionTypes as eventActionTypes } from '../actions/events.actions';
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
    case actionTypes.LOCATIONS.FETCH.REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case actionTypes.LOCATIONS.FETCH.SUCCESS:
      return {
        // locations: action.locations,
        fetching: false,
      };
    case actionTypes.LOCATIONS.FETCH.FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};

export default locations;
