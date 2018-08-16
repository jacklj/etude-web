import { ACTION_TYPES } from './notes.actions';

const initialState = {
  creatingNote: false,
  updatingNote: false,
};

const locations = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.NOTE.GENERAL.CREATE.REQUEST:
      return {
        ...state,
        creatingNote: true,
      };
    case ACTION_TYPES.NOTE.GENERAL.CREATE.SUCCESS:
    case ACTION_TYPES.NOTE.GENERAL.CREATE.FAILURE:
      return {
        ...state,
        creatingNote: false,
      };
    case ACTION_TYPES.NOTE.GENERAL.UPDATE.REQUEST:
      return {
        ...state,
        updatingNote: true,
      };
    case ACTION_TYPES.NOTE.GENERAL.UPDATE.SUCCESS:
    case ACTION_TYPES.NOTE.GENERAL.UPDATE.FAILURE:
      return {
        ...state,
        updatingNote: false,
      };
    default:
      return state;
  }
};

export default locations;
