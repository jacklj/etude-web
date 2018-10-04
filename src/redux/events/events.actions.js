export const actionTypes = {
  EVENT: {
    FETCH: {
      REQUEST: 'EVENT.FETCH.REQUEST',
      SUCCESS: 'EVENT.FETCH.SUCCESS',
      FAILURE: 'EVENT.FETCH.FAILURE',
    },
    FETCH_ALL: {
      REQUEST: 'EVENT.FETCH_ALL.REQUEST',
      SUCCESS: 'EVENT.FETCH_ALL.SUCCESS',
      FAILURE: 'EVENT.FETCH_ALL.FAILURE',
    },
    DELETE: {
      REQUEST: 'EVENT.DELETE.REQUEST',
      SUCCESS: 'EVENT.DELETE.SUCCESS',
      FAILURE: 'EVENT.DELETE.FAILURE',
    },
    UPDATE: {
      REQUEST: 'EVENT.UPDATE.REQUEST',
      SUCCESS: 'EVENT.UPDATE.SUCCESS',
      FAILURE: 'EVENT.UPDATE.FAILURE',
    },
  },
  LESSON: {
    CREATE: {
      REQUEST: 'LESSON.CREATE.REQUEST',
      SUCCESS: 'LESSON.CREATE.SUCCESS',
      FAILURE: 'LESSON.CREATE.FAILURE',
    },
  },
  PRACTICE_SESSION: {
    CREATE: {
      REQUEST: 'PRACTICE_SESSION.CREATE.REQUEST',
      SUCCESS: 'PRACTICE_SESSION.CREATE.SUCCESS',
      FAILURE: 'PRACTICE_SESSION.CREATE.FAILURE',
    },
    START: {
      REQUEST: 'PRACTICE_SESSION.START.REQUEST',
      SUCCESS: 'PRACTICE_SESSION.START.SUCCESS',
      FAILURE: 'PRACTICE_SESSION.START.FAILURE',
    },
    FINISH: {
      REQUEST: 'PRACTICE_SESSION.FINISH.REQUEST',
      SUCCESS: 'PRACTICE_SESSION.FINISH.SUCCESS',
      FAILURE: 'PRACTICE_SESSION.FINISH.FAILURE',
    },
    TIMER: {
      TICK: 'PRACTICE_SESSION.TIMER.TICK',
      INITIALISE: 'PRACTICE_SESSION.TIMER.INITIALISE',
    },
  },
};

export const allEventsFetchRequest = () => ({
  type: actionTypes.EVENT.FETCH_ALL.REQUEST,
});

export const allEventsFetchSuccess = payload => ({
  type: actionTypes.EVENT.FETCH_ALL.SUCCESS,
  payload,
});

export const allEventsFetchFailure = error => ({
  type: actionTypes.EVENT.FETCH_ALL.FAILURE,
  error,
});

export const eventFetchRequest = eventId => ({
  type: actionTypes.EVENT.FETCH.REQUEST,
  eventId,
});

export const eventFetchSuccess = payload => ({
  type: actionTypes.EVENT.FETCH.SUCCESS,
  payload,
});

export const eventFetchFailure = error => ({
  type: actionTypes.EVENT.FETCH.FAILURE,
  error,
});

export const deleteEventRequest = eventId => ({
  type: actionTypes.EVENT.DELETE.REQUEST,
  eventId,
});

export const deleteEventSuccess = eventId => ({
  type: actionTypes.EVENT.DELETE.SUCCESS,
  eventId,
});

export const deleteEventFailure = error => ({
  type: actionTypes.EVENT.DELETE.FAILURE,
  error,
});

export const updateEventRequest = (event, eventId) => ({
  type: actionTypes.EVENT.UPDATE.REQUEST,
  event,
  eventId,
});

export const updateEventSuccess = payload => ({
  type: actionTypes.EVENT.UPDATE.SUCCESS,
  payload,
});

export const updateEventFailure = error => ({
  type: actionTypes.EVENT.UPDATE.FAILURE,
  error,
});

export const lessonCreateRequest = lesson => ({
  type: actionTypes.LESSON.CREATE.REQUEST,
  lesson,
});

export const lessonCreateSuccess = payload => ({
  type: actionTypes.LESSON.CREATE.SUCCESS,
  payload,
});

export const lessonCreateFailure = error => ({
  type: actionTypes.LESSON.CREATE.FAILURE,
  error,
});

export const createPracticeSessionRequest = practiceSession => ({
  type: actionTypes.PRACTICE_SESSION.CREATE.REQUEST,
  practiceSession,
});

export const createPracticeSessionSuccess = payload => ({
  type: actionTypes.PRACTICE_SESSION.CREATE.SUCCESS,
  payload,
});

export const createPracticeSessionFailure = error => ({
  type: actionTypes.PRACTICE_SESSION.CREATE.FAILURE,
  error,
});

export const startPracticingRequest = eventId => ({
  type: actionTypes.PRACTICE_SESSION.START.REQUEST,
  eventId,
});

export const startPracticingSuccess = payload => ({
  type: actionTypes.PRACTICE_SESSION.START.SUCCESS,
  payload,
});

export const startPracticingFailure = error => ({
  type: actionTypes.PRACTICE_SESSION.START.FAILURE,
  error,
});

export const finishPracticingRequest = eventId => ({
  type: actionTypes.PRACTICE_SESSION.FINISH.REQUEST,
  eventId,
});

export const finishPracticingSuccess = payload => ({
  type: actionTypes.PRACTICE_SESSION.FINISH.SUCCESS,
  payload,
});

export const finishPracticingFailure = error => ({
  type: actionTypes.PRACTICE_SESSION.FINISH.FAILURE,
  error,
});

export const initialiseTimer = initialTime => ({
  type: actionTypes.PRACTICE_SESSION.TIMER.INITIALISE,
  initialTime,
});

export const tickPracticeTimer = () => ({
  type: actionTypes.PRACTICE_SESSION.TIMER.TICK,
});
