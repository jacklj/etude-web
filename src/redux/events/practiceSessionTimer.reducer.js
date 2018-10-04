import { actionTypes as eventsActionTypes } from './events.actions';

const initialState = null;

const practiceSessionTimerReducer = (state = initialState, action) => {
  switch (action.type) {
    case eventsActionTypes.PRACTICE_SESSION.START.SUCCESS:
      return 0;
    case eventsActionTypes.PRACTICE_SESSION.FINISH.SUCCESS:
      return null;
    case eventsActionTypes.PRACTICE_SESSION.TIMER.INITIALISE:
      return action.initialTime;
    case eventsActionTypes.PRACTICE_SESSION.TIMER.TICK:
      return state + 1;
    default:
      return state;
  }
};

export default practiceSessionTimerReducer;
