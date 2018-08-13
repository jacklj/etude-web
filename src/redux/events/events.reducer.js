import { ACTION_TYPES } from './events.actions';

const initialState = {
  events: {}, // indexed by eventId
  fetchingAllEvents: false,
  fetchingEvent: false,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ALL_EVENTS_FETCH.REQUEST:
      return {
        ...state,
        fetchingAllEvents: true,
      };
    case ACTION_TYPES.ALL_EVENTS_FETCH.SUCCESS: {
      // transform events from array to object, indexed by event_id
      const events = {};
      action.events.forEach(event => {
        const eventId = event.event_id;
        events[eventId] = event;
      });
      return {
        events,
        fetchingAllEvents: false,
      };
    }
    case ACTION_TYPES.ALL_EVENTS_FETCH.FAILURE:
      return {
        ...state,
        fetchingAllEvents: false,
      };
    case ACTION_TYPES.EVENT_FETCH.REQUEST:
      return {
        ...state,
        fetchingEvent: true,
      };
    case ACTION_TYPES.EVENT_FETCH.SUCCESS:
      return {
        events: {
          ...state.events,
          [action.event.event_id]: action.event,
        },
        fetchingEvent: false,
      };
    case ACTION_TYPES.EVENT_FETCH.FAILURE:
      return {
        ...state,
        fetchingEvent: false,
      };
    default:
      return state;
  }
};

export default eventsReducer;
