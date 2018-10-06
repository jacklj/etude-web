import { actionTypes as eventsActionTypes } from '../events/events.actions';

const initialState = {
  fetchingAllEvents: false,
  fetchingEvent: false,
  updatingEvent: false,
  deletingEvent: false,
  creatingLesson: false,
  creatingPracticeSession: false,
};

const flagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case eventsActionTypes.EVENT.GET_ALL.REQUEST:
      return {
        ...state,
        fetchingAllEvents: true,
      };
    case eventsActionTypes.EVENT.GET_ALL.SUCCESS:
      return {
        ...state,
        fetchingAllEvents: false,
      };
    case eventsActionTypes.EVENT.GET_ALL.FAILURE:
      return {
        ...state,
        fetchingAllEvents: false,
      };
    case eventsActionTypes.EVENT.GET.REQUEST:
      return {
        ...state,
        fetchingEvent: true,
      };
    case eventsActionTypes.EVENT.GET.SUCCESS:
      return {
        ...state,
        fetchingEvent: false,
      };
    case eventsActionTypes.EVENT.GET.FAILURE:
      return {
        ...state,
        fetchingEvent: false,
      };
    case eventsActionTypes.EVENT.DELETE.REQUEST:
      return {
        ...state,
        deletingEvent: true,
      };
    case eventsActionTypes.EVENT.DELETE.SUCCESS: {
      return {
        ...state,
        deletingEvent: false,
      };
    }
    case eventsActionTypes.EVENT.DELETE.FAILURE:
      return {
        ...state,
        deletingEvent: false,
      };
    case eventsActionTypes.EVENT.UPDATE.REQUEST:
      return {
        ...state,
        updatingEvent: true,
      };
    case eventsActionTypes.EVENT.UPDATE.SUCCESS:
      return {
        ...state,
        updatingEvent: false,
      };
    case eventsActionTypes.EVENT.UPDATE.FAILURE:
      return {
        ...state,
        updatingEvent: false,
      };
    case eventsActionTypes.LESSON.CREATE.REQUEST:
      return {
        ...state,
        creatingLesson: true,
      };
    case eventsActionTypes.LESSON.CREATE.SUCCESS:
      return {
        ...state,
        creatingLesson: false,
      };
    case eventsActionTypes.LESSON.CREATE.FAILURE:
      return {
        ...state,
        creatingLesson: false,
      };
    case eventsActionTypes.PRACTICE_SESSION.CREATE.REQUEST:
      return {
        ...state,
        creatingPracticeSession: true,
      };
    case eventsActionTypes.PRACTICE_SESSION.CREATE.SUCCESS:
      return {
        ...state,
        creatingPracticeSession: false,
      };
    case eventsActionTypes.PRACTICE_SESSION.CREATE.FAILURE:
      return {
        ...state,
        creatingPracticeSession: false,
      };
    default:
      return state;
  }
};

export default flagsReducer;
