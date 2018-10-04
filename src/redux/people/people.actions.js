export const actionTypes = {
  PEOPLE: {
    FETCH: {
      REQUEST: 'PEOPLE.FETCH.REQUEST',
      SUCCESS: 'PEOPLE.FETCH.SUCCESS',
      FAILURE: 'PEOPLE.FETCH.FAILURE',
    },
  },
};

export const peopleFetchRequest = () => ({
  type: actionTypes.PEOPLE.FETCH.REQUEST,
});

export const peopleFetchSuccess = payload => ({
  type: actionTypes.PEOPLE.FETCH.SUCCESS,
  payload,
});

export const peopleFetchFailure = error => ({
  type: actionTypes.PEOPLE.FETCH.FAILURE,
  error,
});
