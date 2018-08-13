import { ACTION_TYPES } from '../actions/events';

const events = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.STORE_ALL_EVENTS:
      return action.events;
    default:
      return state;
  }
};

export default events;
