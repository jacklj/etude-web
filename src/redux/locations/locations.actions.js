export const actionTypes = {
  LOCATIONS: {
    GET_ALL: {
      REQUEST: 'LOCATIONS.GET_ALL.REQUEST',
      SUCCESS: 'LOCATIONS.GET_ALL.SUCCESS',
      FAILURE: 'LOCATIONS.GET_ALL.FAILURE',
    },
  },
};

export const getAllLocationsRequest = () => ({
  type: actionTypes.LOCATIONS.GET_ALL.REQUEST,
});

export const getAllLocationsSuccess = payload => ({
  type: actionTypes.LOCATIONS.GET_ALL.SUCCESS,
  payload,
});

export const getAllLocationsFailure = error => ({
  type: actionTypes.LOCATIONS.GET_ALL.FAILURE,
  error,
});
