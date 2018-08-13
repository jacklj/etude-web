import { ACTION_TYPES } from './events.actions';

const initialState = {
  events: [],
  fetchingEvents: false,
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ALL_EVENTS_FETCH.REQUEST:
      return {
        ...state,
        fetchingEvents: true,
      };
    case ACTION_TYPES.ALL_EVENTS_FETCH.SUCCESS:
      return {
        events: action.events,
        fetchingEvents: false,
      };
    case ACTION_TYPES.ALL_EVENTS_FETCH.FAILURE:
      return {
        ...state,
        fetchingEvents: false,
      };
    default:
      return state;
  }
};

export default events;
