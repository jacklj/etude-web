import { actionTypes as eventsActionTypes } from './events.actions';

const initialState = {
  practiceSessionTimer: undefined,
};

const practiceSessionTimerReducer = (state = initialState, action) => {
  switch (action.type) {
    case eventsActionTypes.PRACTICE_SESSION.START.SUCCESS:
      return {
        ...state,
        practiceSessionTimer: 0,
      };
    case eventsActionTypes.PRACTICE_SESSION.FINISH.SUCCESS:
      return {
        ...state,
        practiceSessionTimer: undefined,
      };
    case eventsActionTypes.PRACTICE_SESSION.TIMER.INITIALISE: {
      return {
        ...state,
        practiceSessionTimer: action.initialTime,
      };
    }
    case eventsActionTypes.PRACTICE_SESSION.TIMER.TICK:
      return {
        ...state,
        practiceSessionTimer: state.practiceSessionTimer + 1,
      };
    default:
      return state;
  }
};

export default practiceSessionTimerReducer;
