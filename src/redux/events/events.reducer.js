import { ACTION_TYPES } from './events.actions';
import { ACTION_TYPES as notesActionTypes } from '../notes/notes.actions';
import { ACTION_TYPES as itemsActionTypes } from '../items/items.actions';

const initialState = {
  events: {}, // indexed by eventId
  fetchingAllEvents: false,
  fetchingEvent: false,
  updatingEvent: false,
  creatingLesson: false,
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
    case ACTION_TYPES.LESSON.CREATE.REQUEST:
      return {
        ...state,
        creatingLesson: true,
      };
    case ACTION_TYPES.LESSON.CREATE.SUCCESS:
      return {
        ...state,
        creatingLesson: false,
        events: {
          ...state.events,
          [action.lesson.event_id]: action.lesson,
        },
      };
    case ACTION_TYPES.LESSON.CREATE.FAILURE:
      return {
        ...state,
        creatingLesson: false,
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
    case notesActionTypes.NOTE.DELETE.SUCCESS: {
      const { noteId, eventId } = action;
      const newNotes = { ...state.events[eventId].notes };
      delete newNotes[noteId];
      return {
        ...state,
        events: {
          ...state.events,
          [eventId]: {
            ...state.events[eventId],
            notes: newNotes,
          },
        },
      };
    }
    case itemsActionTypes.REPERTOIRE_INSTANCE.CREATE.SUCCESS: {
      const { repertoireInstance } = action;
      const itemId = repertoireInstance.item_id;
      const eventId = repertoireInstance.event_id;

      return {
        ...state,
        events: {
          ...state.events,
          [eventId]: {
            ...state.events[eventId],
            items: {
              ...state.events[eventId].items,
              [itemId]: repertoireInstance,
            },
          },
        },
      };
    }
    case itemsActionTypes.EXERCISE_INSTANCE.CREATE.SUCCESS: {
      const { exerciseInstance } = action;
      const itemId = exerciseInstance.item_id;
      const eventId = exerciseInstance.event_id;

      return {
        ...state,
        events: {
          ...state.events,
          [eventId]: {
            ...state.events[eventId],
            items: {
              ...state.events[eventId].items,
              [itemId]: exerciseInstance,
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
