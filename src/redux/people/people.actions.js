export const actionTypes = {
  PEOPLE: {
    GET_ALL: {
      REQUEST: 'PEOPLE.GET_ALL.REQUEST',
      SUCCESS: 'PEOPLE.GET_ALL.SUCCESS',
      FAILURE: 'PEOPLE.GET_ALL.FAILURE',
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
