import { actionTypes as notesActionTypes } from '../notes/notes.actions';

const initialState = {
  creatingNote: false,
  updatingNote: false,
  deletingNote: false,
};

const flagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case notesActionTypes.NOTE.CREATE_AND_ADD_TO.EVENT.REQUEST:
    case notesActionTypes.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.REQUEST:
      return {
        ...state,
        creatingNote: true,
      };
    case notesActionTypes.NOTE.CREATE_AND_ADD_TO.EVENT.SUCCESS:
    case notesActionTypes.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.SUCCESS:
      return {
        ...state,
        creatingNote: false,
      };
    case notesActionTypes.NOTE.CREATE_AND_ADD_TO.EVENT.FAILURE:
    case notesActionTypes.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.FAILURE:
      return {
        ...state,
        creatingNote: false,
      };
    case notesActionTypes.NOTE.UPDATE.REQUEST:
      return {
        ...state,
        updatingNote: true,
      };
    case notesActionTypes.NOTE.UPDATE.SUCCESS:
      return {
        ...state,
        updatingNote: false,
      };
    case notesActionTypes.NOTE.UPDATE.FAILURE:
      return {
        ...state,
        updatingNote: false,
      };
    case notesActionTypes.NOTE.DELETE.REQUEST:
      return {
        ...state,
        deletingNote: true,
      };
    case notesActionTypes.NOTE.DELETE.SUCCESS: {
      return {
        ...state,
        deletingNote: false,
      };
    }
    case notesActionTypes.NOTE.DELETE.FAILURE:
      return {
        ...state,
        deletingNote: false,
      };
    default:
      return state;
  }
};

export default flagsReducer;
