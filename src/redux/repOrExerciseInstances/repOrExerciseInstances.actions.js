export const actionTypes = {
  REPERTOIRE_INSTANCE: {
    CREATE: {
      REQUEST: 'REPERTOIRE_INSTANCE.CREATE.REQUEST',
      SUCCESS: 'REPERTOIRE_INSTANCE.CREATE.SUCCESS',
      FAILURE: 'REPERTOIRE_INSTANCE.CREATE.FAILURE',
    },
  },
  EXERCISE_INSTANCE: {
    CREATE: {
      REQUEST: 'EXERCISE_INSTANCE.CREATE.REQUEST',
      SUCCESS: 'EXERCISE_INSTANCE.CREATE.SUCCESS',
      FAILURE: 'EXERCISE_INSTANCE.CREATE.FAILURE',
    },
  },
  REP_OR_EXERCISE_INSTANCE: {
    DELETE: {
      REQUEST: 'REP_OR_EXERCISE_INSTANCE.DELETE.REQUEST',
      SUCCESS: 'REP_OR_EXERCISE_INSTANCE.DELETE.SUCCESS',
      FAILURE: 'REP_OR_EXERCISE_INSTANCE.DELETE.FAILURE',
    },
  },
};

export const createRepertoireInstanceRequest = (repertoireId, eventId) => ({
  type: actionTypes.REPERTOIRE_INSTANCE.CREATE.REQUEST,
  repertoireId,
  eventId,
});

export const createRepertoireInstanceSuccess = payload => ({
  type: actionTypes.REPERTOIRE_INSTANCE.CREATE.SUCCESS,
  payload,
});

export const createRepertoireInstanceFailure = error => ({
  type: actionTypes.REPERTOIRE_INSTANCE.CREATE.FAILURE,
  error,
});

export const createExerciseInstanceRequest = (exerciseId, eventId) => ({
  type: actionTypes.EXERCISE_INSTANCE.CREATE.REQUEST,
  exerciseId,
  eventId,
});

export const createExerciseInstanceSuccess = payload => ({
  type: actionTypes.EXERCISE_INSTANCE.CREATE.SUCCESS,
  payload,
});

export const createExerciseInstanceFailure = error => ({
  type: actionTypes.EXERCISE_INSTANCE.CREATE.FAILURE,
  error,
});

export const deleteRepOrExerciseInstanceRequest = (repOrExerciseInstanceId, eventId) => ({
  type: actionTypes.REP_OR_EXERCISE_INSTANCE.DELETE.REQUEST,
  repOrExerciseInstanceId,
  eventId,
});

export const deleteRepOrExerciseInstanceSuccess = (repOrExerciseInstanceId, eventId) => ({
  type: actionTypes.REP_OR_EXERCISE_INSTANCE.DELETE.SUCCESS,
  repOrExerciseInstanceId,
  eventId,
});

export const deleteRepOrExerciseInstanceFailure = error => ({
  type: actionTypes.REP_OR_EXERCISE_INSTANCE.DELETE.FAILURE,
  error,
});
