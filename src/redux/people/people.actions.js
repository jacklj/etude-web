export const ACTION_TYPES = {
  PEOPLE: {
    FETCH: {
      REQUEST: 'PEOPLE.FETCH.REQUEST',
      SUCCESS: 'PEOPLE.FETCH.SUCCESS',
      FAILURE: 'PEOPLE.FETCH.FAILURE',
    },
  },
};

export const peopleFetchRequest = () => ({
  type: ACTION_TYPES.PEOPLE.FETCH.REQUEST,
});

export const peopleFetchSuccess = payload => ({
  type: ACTION_TYPES.PEOPLE.FETCH.SUCCESS,
  payload,
});

export const peopleFetchFailure = error => ({
  type: ACTION_TYPES.PEOPLE.FETCH.FAILURE,
  error,
});
