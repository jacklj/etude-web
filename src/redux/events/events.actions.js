export const ACTION_TYPES = {
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
  type: ACTION_TYPES.EVENT.FETCH_ALL.REQUEST,
});

export const allEventsFetchSuccess = payload => ({
  type: ACTION_TYPES.EVENT.FETCH_ALL.SUCCESS,
  payload,
});

export const allEventsFetchFailure = error => ({
  type: ACTION_TYPES.EVENT.FETCH_ALL.FAILURE,
  error,
});

export const eventFetchRequest = eventId => ({
  type: ACTION_TYPES.EVENT.FETCH.REQUEST,
  eventId,
});

export const eventFetchSuccess = payload => ({
  type: ACTION_TYPES.EVENT.FETCH.SUCCESS,
  payload,
});

export const eventFetchFailure = error => ({
  type: ACTION_TYPES.EVENT.FETCH.FAILURE,
  error,
});

export const deleteEventRequest = eventId => ({
  type: ACTION_TYPES.EVENT.DELETE.REQUEST,
  eventId,
});

export const deleteEventSuccess = eventId => ({
  type: ACTION_TYPES.EVENT.DELETE.SUCCESS,
  eventId,
});

export const deleteEventFailure = error => ({
  type: ACTION_TYPES.EVENT.DELETE.FAILURE,
  error,
});

export const updateEventRequest = (event, eventId) => ({
  type: ACTION_TYPES.EVENT.UPDATE.REQUEST,
  event,
  eventId,
});

export const updateEventSuccess = payload => ({
  type: ACTION_TYPES.EVENT.UPDATE.SUCCESS,
  payload,
});

export const updateEventFailure = error => ({
  type: ACTION_TYPES.EVENT.UPDATE.FAILURE,
  error,
});

export const lessonCreateRequest = lesson => ({
  type: ACTION_TYPES.LESSON.CREATE.REQUEST,
  lesson,
});

export const lessonCreateSuccess = payload => ({
  type: ACTION_TYPES.LESSON.CREATE.SUCCESS,
  payload,
});

export const lessonCreateFailure = error => ({
  type: ACTION_TYPES.LESSON.CREATE.FAILURE,
  error,
});

export const createPracticeSessionRequest = practiceSession => ({
  type: ACTION_TYPES.PRACTICE_SESSION.CREATE.REQUEST,
  practiceSession,
});

export const createPracticeSessionSuccess = payload => ({
  type: ACTION_TYPES.PRACTICE_SESSION.CREATE.SUCCESS,
  payload,
});

export const createPracticeSessionFailure = error => ({
  type: ACTION_TYPES.PRACTICE_SESSION.CREATE.FAILURE,
  error,
});

export const startPracticingRequest = eventId => ({
  type: ACTION_TYPES.PRACTICE_SESSION.START.REQUEST,
  eventId,
});

export const startPracticingSuccess = payload => ({
  type: ACTION_TYPES.PRACTICE_SESSION.START.SUCCESS,
  payload,
});

export const startPracticingFailure = error => ({
  type: ACTION_TYPES.PRACTICE_SESSION.START.FAILURE,
  error,
});

export const finishPracticingRequest = eventId => ({
  type: ACTION_TYPES.PRACTICE_SESSION.FINISH.REQUEST,
  eventId,
});

export const finishPracticingSuccess = payload => ({
  type: ACTION_TYPES.PRACTICE_SESSION.FINISH.SUCCESS,
  payload,
});

export const finishPracticingFailure = error => ({
  type: ACTION_TYPES.PRACTICE_SESSION.FINISH.FAILURE,
  error,
});

export const initialiseTimer = initialTime => ({
  type: ACTION_TYPES.PRACTICE_SESSION.TIMER.INITIALISE,
  initialTime,
});

export const tickPracticeTimer = () => ({
  type: ACTION_TYPES.PRACTICE_SESSION.TIMER.TICK,
});
