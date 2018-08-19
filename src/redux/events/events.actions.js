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
  PRACTICE: {
    START: {
      REQUEST: 'PRACTICE.START.REQUEST',
      SUCCESS: 'PRACTICE.START.SUCCESS',
      FAILURE: 'PRACTICE.START.FAILURE',
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

export const startPracticingRequest = () => ({
  type: ACTION_TYPES.PRACTICE.START.REQUEST,
});

export const startPracticingSuccess = practiceSession => ({
  type: ACTION_TYPES.PRACTICE.START.SUCCESS,
  practiceSession,
});

export const startPracticingFailure = error => ({
  type: ACTION_TYPES.PRACTICE.START.FAILURE,
  error,
});
