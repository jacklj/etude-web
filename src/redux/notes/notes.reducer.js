import { ACTION_TYPES } from './notes.actions';

const initialState = {
  postingNote: false,
};

const locations = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.NOTE.GENERAL.CREATE.REQUEST:
      return {
        ...state,
        postingNote: true,
      };
    case ACTION_TYPES.NOTE.GENERAL.CREATE.SUCCESS:
    case ACTION_TYPES.NOTE.GENERAL.CREATE.FAILURE:
      return {
        ...state,
        postingNote: false,
      };
    default:
      return state;
  }
};

export default locations;
