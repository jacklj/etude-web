import { ACTION_TYPES } from './events.actions';
import { ACTION_TYPES as notesActionTypes } from '../notes/notes.actions';

const initialState = {
  events: {}, // indexed by eventId
  fetchingAllEvents: false,
  fetchingEvent: false,
  updatingEvent: false,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.EVENT.FETCH_ALL.REQUEST:
      return {
        ...state,
        fetchingAllEvents: true,
      };
    case ACTION_TYPES.EVENT.FETCH_ALL.SUCCESS: {
      // transform events from array to object, indexed by event_id
      const { events } = action;
      return {
        ...state,
        events,
        fetchingAllEvents: false,
      };
    }
    case ACTION_TYPES.EVENT.FETCH_ALL.FAILURE:
      return {
        ...state,
        fetchingAllEvents: false,
      };
    case ACTION_TYPES.EVENT.FETCH.REQUEST:
      return {
        ...state,
        fetchingEvent: true,
      };
    case ACTION_TYPES.EVENT.FETCH.SUCCESS:
      return {
        ...state,
        fetchingEvent: false,
        events: {
          ...state.events,
          [action.event.event_id]: action.event,
        },
      };
    case ACTION_TYPES.EVENT.FETCH.FAILURE:
      return {
        ...state,
        fetchingEvent: false,
      };
    case ACTION_TYPES.LESSON.UPDATE.REQUEST:
      return {
        ...state,
        updatingEvent: true,
      };
    case ACTION_TYPES.LESSON.UPDATE.SUCCESS:
      return {
        ...state,
        updatingEvent: false,
        events: {
          ...state.events,
          [action.lesson.event_id]: action.lesson,
        },
      };
    case ACTION_TYPES.LESSON.UPDATE.FAILURE:
      return {
        ...state,
        updatingEvent: false,
      };
    case notesActionTypes.NOTE.GENERAL.UPDATE.SUCCESS:
    case notesActionTypes.NOTE.GENERAL.CREATE.SUCCESS: {
      const { note } = action;
      const eventId = note.event_id;
      return {
        ...state,
        events: {
          ...state.events,
          [eventId]: {
            ...state.events[eventId],
            notes: {
              ...state.events[eventId].notes,
              [note.note_id]: note,
            },
          },
        },
      };
    }
    default:
      return state;
  }
};

export default eventsReducer;
