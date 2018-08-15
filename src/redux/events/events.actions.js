export const ACTION_TYPES = {
  ALL_EVENTS_FETCH: {
    REQUEST: 'ALL_EVENTS_FETCH.REQUEST',
    SUCCESS: 'ALL_EVENTS_FETCH.SUCCESS',
    FAILURE: 'ALL_EVENTS_FETCH.FAILURE',
  },
  EVENT_FETCH: {
    REQUEST: 'EVENT_FETCH.REQUEST',
    SUCCESS: 'EVENT_FETCH.SUCCESS',
    FAILURE: 'EVENT_FETCH.FAILURE',
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

export const eventFetchRequest = eventId => ({
  type: ACTION_TYPES.EVENT_FETCH.REQUEST,
  eventId,
});

export const eventFetchSuccess = event => ({
  type: ACTION_TYPES.EVENT_FETCH.SUCCESS,
  event,
});

export const eventFetchFailure = error => ({
  type: ACTION_TYPES.EVENT_FETCH.FAILURE,
  error,
});
