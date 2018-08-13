export const ACTION_TYPES = {
  PEOPLE_FETCH: {
    REQUEST: 'PEOPLE_FETCH.REQUEST',
    SUCCESS: 'PEOPLE_FETCH.SUCCESS',
    FAILURE: 'PEOPLE_FETCH.FAILURE',
  },
};

export const peopleFetchRequest = () => ({
  type: ACTION_TYPES.PEOPLE_FETCH.REQUEST,
});

export const peopleFetchSuccess = people => ({
  type: ACTION_TYPES.PEOPLE_FETCH.SUCCESS,
  people,
});

export const peopleFetchFailure = error => ({
  type: ACTION_TYPES.PEOPLE_FETCH.FAILURE,
  error,
});
