export const actionTypes = {
  EXERCISES: {
    FETCH_ALL: {
      REQUEST: 'EXERCISES.FETCH_ALL.REQUEST',
      SUCCESS: 'EXERCISES.FETCH_ALL.SUCCESS',
      FAILURE: 'EXERCISES.FETCH_ALL.FAILURE',
    },
  },
};

export const fetchAllExercisesRequest = () => ({
  type: actionTypes.EXERCISES.FETCH_ALL.REQUEST,
});

export const fetchAllExercisesSuccess = payload => ({
  type: actionTypes.EXERCISES.FETCH_ALL.SUCCESS,
  payload,
});

export const fetchAllExercisesFailure = error => ({
  type: actionTypes.EXERCISES.FETCH_ALL.FAILURE,
  error,
});
