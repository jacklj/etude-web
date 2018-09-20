import { ACTION_TYPES } from './notes.actions';

const initialState = {
  creatingNote: false,
  updatingNote: false,
  deletingNote: false,
};

const locations = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.REQUEST:
    case ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.ITEM.REQUEST:
      return {
        ...state,
        creatingNote: true,
      };
    case ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.SUCCESS:
    case ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.FAILURE:
    case ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.ITEM.SUCCESS:
    case ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.ITEM.FAILURE:
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
    case ACTION_TYPES.NOTE.DELETE.SUCCESS:
    case ACTION_TYPES.NOTE.DELETE.FAILURE:
      return {
        ...state,
        deletingNote: false,
      };
    default:
      return state;
  }
};

export default locations;
