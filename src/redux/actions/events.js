export const ACTION_TYPES = {
  ALL_EVENTS_FETCH: {
    REQUEST: 'ALL_EVENTS_FETCH.REQUEST',
    SUCCESS: 'ALL_EVENTS_FETCH.SUCCESS',
    FAILURE: 'ALL_EVENTS_FETCH.FAILURE',
  },
};

export const allEventsFetchRequest = () => ({
  type: ACTION_TYPES.ALL_EVENTS_FETCH.REQUEST,
});

export const allEventsFetchSuccess = events => ({
  type: ACTION_TYPES.ALL_EVENTS_FETCH.SUCCESS,
  events,
});

export const allEventsFetchFailure = error => ({
  type: ACTION_TYPES.ALL_EVENTS_FETCH.FAILURE,
  error,
});
