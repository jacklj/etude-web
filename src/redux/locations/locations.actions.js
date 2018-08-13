export const ACTION_TYPES = {
  LOCATIONS_FETCH: {
    REQUEST: 'LOCATIONS_FETCH.REQUEST',
    SUCCESS: 'LOCATIONS_FETCH.SUCCESS',
    FAILURE: 'LOCATIONS_FETCH.FAILURE',
  },
};

export const locationsFetchRequest = () => ({
  type: ACTION_TYPES.LOCATIONS_FETCH.REQUEST,
});

export const locationsFetchSuccess = locations => ({
  type: ACTION_TYPES.LOCATIONS_FETCH.SUCCESS,
  locations,
});

export const locationsFetchFailure = error => ({
  type: ACTION_TYPES.LOCATIONS_FETCH.FAILURE,
  error,
});
