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
