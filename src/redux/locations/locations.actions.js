export const actionTypes = {
  LOCATIONS: {
    GET_ALL: {
      REQUEST: 'LOCATIONS.GET_ALL.REQUEST',
      SUCCESS: 'LOCATIONS.GET_ALL.SUCCESS',
      FAILURE: 'LOCATIONS.GET_ALL.FAILURE',
    },
    CREATE: {
      REQUEST: 'LOCATIONS.CREATE.REQUEST',
      SUCCESS: 'LOCATIONS.CREATE.SUCCESS',
      FAILURE: 'LOCATIONS.CREATE.FAILURE',
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

export const addLocationRequest = location => ({
  type: actionTypes.LOCATIONS.CREATE.REQUEST,
  location,
});

export const addLocationSuccess = payload => ({
  type: actionTypes.LOCATIONS.CREATE.SUCCESS,
  payload,
});

export const addLocationFailure = error => ({
  type: actionTypes.LOCATIONS.CREATE.FAILURE,
  error,
});
