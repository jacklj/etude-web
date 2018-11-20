export const actionTypes = {
  PEOPLE: {
    GET_ALL: {
      REQUEST: 'PEOPLE.GET_ALL.REQUEST',
      SUCCESS: 'PEOPLE.GET_ALL.SUCCESS',
      FAILURE: 'PEOPLE.GET_ALL.FAILURE',
    },
    CREATE: {
      REQUEST: 'PEOPLE.CREATE.REQUEST',
      SUCCESS: 'PEOPLE.CREATE.SUCCESS',
      FAILURE: 'PEOPLE.CREATE.FAILURE',
    },
  },
};

export const getAllPeopleRequest = () => ({
  type: actionTypes.PEOPLE.GET_ALL.REQUEST,
});

export const getAllPeopleSuccess = payload => ({
  type: actionTypes.PEOPLE.GET_ALL.SUCCESS,
  payload,
});

export const getAllPeopleFailure = error => ({
  type: actionTypes.PEOPLE.GET_ALL.FAILURE,
  error,
});

export const addPersonRequest = person => ({
  type: actionTypes.PEOPLE.CREATE.REQUEST,
  person,
});

export const addPersonSuccess = payload => ({
  type: actionTypes.PEOPLE.CREATE.SUCCESS,
  payload,
});

export const addPersonFailure = error => ({
  type: actionTypes.PEOPLE.CREATE.FAILURE,
  error,
});
