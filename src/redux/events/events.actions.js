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
  },
  LESSON: {
    UPDATE: {
      REQUEST: 'LESSON.UPDATE.REQUEST',
      SUCCESS: 'LESSON.UPDATE.SUCCESS',
      FAILURE: 'LESSON.UPDATE.FAILURE',
    },
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
    RESTART: 'PRACTICE_SESSION.RESTART',
    TIMER: {
      TICK: 'PRACTICE_SESSION.TIMER.TICK',
    },
  },
};

export const allEventsFetchRequest = () => ({
  type: ACTION_TYPES.EVENT.FETCH_ALL.REQUEST,
});

export const allEventsFetchSuccess = events => ({
  type: ACTION_TYPES.EVENT.FETCH_ALL.SUCCESS,
  events,
});

export const allEventsFetchFailure = error => ({
  type: ACTION_TYPES.EVENT.FETCH_ALL.FAILURE,
  error,
});

export const eventFetchRequest = eventId => ({
  type: ACTION_TYPES.EVENT.FETCH.REQUEST,
  eventId,
});

export const eventFetchSuccess = event => ({
  type: ACTION_TYPES.EVENT.FETCH.SUCCESS,
  event,
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

export const lessonUpdateRequest = (lesson, eventId) => ({
  type: ACTION_TYPES.LESSON.UPDATE.REQUEST,
  lesson,
  eventId,
});

export const lessonUpdateSuccess = lesson => ({
  type: ACTION_TYPES.LESSON.UPDATE.SUCCESS,
  lesson,
});

export const lessonUpdateFailure = error => ({
  type: ACTION_TYPES.LESSON.UPDATE.FAILURE,
  error,
});

export const lessonCreateRequest = lesson => ({
  type: ACTION_TYPES.LESSON.CREATE.REQUEST,
  lesson,
});

export const lessonCreateSuccess = lesson => ({
  type: ACTION_TYPES.LESSON.CREATE.SUCCESS,
  lesson,
});

export const lessonCreateFailure = error => ({
  type: ACTION_TYPES.LESSON.CREATE.FAILURE,
  error,
});

export const createPracticeSessionRequest = practiceSession => ({
  type: ACTION_TYPES.PRACTICE_SESSION.CREATE.REQUEST,
  practiceSession,
});

export const createPracticeSessionSuccess = practiceSession => ({
  type: ACTION_TYPES.PRACTICE_SESSION.CREATE.SUCCESS,
  practiceSession,
});

export const createPracticeSessionFailure = error => ({
  type: ACTION_TYPES.PRACTICE_SESSION.CREATE.FAILURE,
  error,
});

export const startPracticingRequest = eventId => ({
  type: ACTION_TYPES.PRACTICE_SESSION.START.REQUEST,
  eventId,
});

export const startPracticingSuccess = practiceSession => ({
  type: ACTION_TYPES.PRACTICE_SESSION.START.SUCCESS,
  practiceSession,
});

export const startPracticingFailure = error => ({
  type: ACTION_TYPES.PRACTICE_SESSION.START.FAILURE,
  error,
});

export const finishPracticingRequest = eventId => ({
  type: ACTION_TYPES.PRACTICE_SESSION.FINISH.REQUEST,
  eventId,
});

export const finishPracticingSuccess = practiceSession => ({
  type: ACTION_TYPES.PRACTICE_SESSION.FINISH.SUCCESS,
  practiceSession,
});

export const finishPracticingFailure = error => ({
  type: ACTION_TYPES.PRACTICE_SESSION.FINISH.FAILURE,
  error,
});

export const restartPracticeSession = initialTimeElapsed => ({
  type: ACTION_TYPES.PRACTICE_SESSION.RESTART,
  initialTimeElapsed,
});

export const tickPracticeTimer = () => ({
  type: ACTION_TYPES.PRACTICE_SESSION.TIMER.TICK,
});
