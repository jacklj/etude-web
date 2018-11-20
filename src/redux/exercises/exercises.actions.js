export const actionTypes = {
  EXERCISES: {
    GET_ALL: {
      REQUEST: 'EXERCISES.GET_ALL.REQUEST',
      SUCCESS: 'EXERCISES.GET_ALL.SUCCESS',
      FAILURE: 'EXERCISES.GET_ALL.FAILURE',
    },
    CREATE: {
      REQUEST: 'EXERCISES.CREATE.REQUEST',
      SUCCESS: 'EXERCISES.CREATE.SUCCESS',
      FAILURE: 'EXERCISES.CREATE.FAILURE',
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

export const addExerciseRequest = exercise => ({
  type: actionTypes.EXERCISES.CREATE.REQUEST,
  exercise,
});

export const addExerciseSuccess = payload => ({
  type: actionTypes.EXERCISES.CREATE.SUCCESS,
  payload,
});

export const addExerciseFailure = error => ({
  type: actionTypes.EXERCISES.CREATE.FAILURE,
  error,
});
