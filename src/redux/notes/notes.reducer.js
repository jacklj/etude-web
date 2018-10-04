import { ACTION_TYPES } from './notes.actions';
// import { ACTION_TYPES as eventActionTypes } from '../actions/events.actions';
// import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

const initialState = {
  creatingNote: false,
  updatingNote: false,
  deletingNote: false,
  // notes: {},
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    // case eventActionTypes.EVENT.FETCH_ALL.SUCCESS:
    //   if (ifObjectExistsAndIsNotEmpty(action.payload.notes)) {
    //     return {
    //       ...state,
    //       notes: {
    //         ...state.notes,
    //         ...action.payload.notes,
    //       },
    //     };
    //   }
    //   return state;
    case ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.REQUEST:
    case ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.REQUEST:
      return {
        ...state,
        creatingNote: true,
      };
    case ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.SUCCESS:
    case ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.SUCCESS:
      return {
        ...state,
        creatingNote: false,
        // notes: {
        //   ...state.notes,
        //   [action.note.note_id]: action.note,
        // },
      };
    case ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.FAILURE:
    case ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.FAILURE:
      return {
        ...state,
        creatingNote: false,
      };
    case ACTION_TYPES.NOTE.UPDATE.REQUEST:
      return {
        ...state,
        updatingNote: true,
      };
    case ACTION_TYPES.NOTE.UPDATE.SUCCESS:
      return {
        ...state,
        updatingNote: false,
        // notes: {
        //   ...state.notes,
        //   [action.note.note_id]: {
        //     ...state.notes[action.note.note_id],
        //     ...action.note,
        //   },
        // },
      };
    case ACTION_TYPES.NOTE.UPDATE.FAILURE:
      return {
        ...state,
        updatingNote: false,
      };
    case ACTION_TYPES.NOTE.DELETE.REQUEST:
      return {
        ...state,
        deletingNote: true,
      };
    case ACTION_TYPES.NOTE.DELETE.SUCCESS: {
      // const notes = { ...state.notes };
      // delete notes[action.noteId];
      return {
        ...state,
        deletingNote: false,
        // notes,
      };
    }
    case ACTION_TYPES.NOTE.DELETE.FAILURE:
      return {
        ...state,
        deletingNote: false,
      };
    default:
      return state;
  }
};

export default notesReducer;
