export const actionTypes = {
  LOCATIONS: {
    FETCH: {
      REQUEST: 'LOCATIONS.FETCH.REQUEST',
      SUCCESS: 'LOCATIONS.FETCH.SUCCESS',
      FAILURE: 'LOCATIONS.FETCH.FAILURE',
    },
  },
};

export const locationsFetchRequest = () => ({
  type: actionTypes.LOCATIONS.FETCH.REQUEST,
});

export const locationsFetchSuccess = payload => ({
  type: actionTypes.LOCATIONS.FETCH.SUCCESS,
  payload,
});

export const locationsFetchFailure = error => ({
  type: actionTypes.LOCATIONS.FETCH.FAILURE,
  error,
});
