export const actionTypes = {
  EXERCISES: {
    GET_ALL: {
      REQUEST: 'EXERCISES.GET_ALL.REQUEST',
      SUCCESS: 'EXERCISES.GET_ALL.SUCCESS',
      FAILURE: 'EXERCISES.GET_ALL.FAILURE',
    },
  },
};

export const getAllExercisesRequest = () => ({
  type: actionTypes.EXERCISES.GET_ALL.REQUEST,
});

export const getAllExercisesSuccess = payload => ({
  type: actionTypes.EXERCISES.GET_ALL.SUCCESS,
  payload,
});

export const getAllExercisesFailure = error => ({
  type: actionTypes.EXERCISES.GET_ALL.FAILURE,
  error,
});
