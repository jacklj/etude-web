export const ACTION_TYPES = {
  REPERTOIRE: {
    FETCH_ALL: {
      REQUEST: 'REPERTOIRE.FETCH_ALL.REQUEST',
      SUCCESS: 'REPERTOIRE.FETCH_ALL.SUCCESS',
      FAILURE: 'REPERTOIRE.FETCH_ALL.FAILURE',
    },
  },
  REPERTOIRE_INSTANCE: {
    CREATE: {
      REQUEST: 'REPERTOIRE_INSTANCE.CREATE.REQUEST',
      SUCCESS: 'REPERTOIRE_INSTANCE.CREATE.SUCCESS',
      FAILURE: 'REPERTOIRE_INSTANCE.CREATE.FAILURE',
    },
  },
  EXERCISES: {
    FETCH_ALL: {
      REQUEST: 'EXERCISES.FETCH_ALL.REQUEST',
      SUCCESS: 'EXERCISES.FETCH_ALL.SUCCESS',
      FAILURE: 'EXERCISES.FETCH_ALL.FAILURE',
    },
  },
};

export const fetchAllRepertoireRequest = () => ({
  type: ACTION_TYPES.REPERTOIRE.FETCH_ALL.REQUEST,
});

export const fetchAllRepertoireSuccess = repertoire => ({
  type: ACTION_TYPES.REPERTOIRE.FETCH_ALL.SUCCESS,
  repertoire,
});

export const fetchAllRepertoireFailure = error => ({
  type: ACTION_TYPES.REPERTOIRE.FETCH_ALL.FAILURE,
  error,
});

export const fetchAllExercisesRequest = () => ({
  type: ACTION_TYPES.EXERCISES.FETCH_ALL.REQUEST,
});

export const fetchAllExercisesSuccess = exercises => ({
  type: ACTION_TYPES.EXERCISES.FETCH_ALL.SUCCESS,
  exercises,
});

export const fetchAllExercisesFailure = error => ({
  type: ACTION_TYPES.EXERCISES.FETCH_ALL.FAILURE,
  error,
});

export const createRepertoireInstanceRequest = (repertoireId, eventId) => ({
  type: ACTION_TYPES.REPERTOIRE_INSTANCE.CREATE.REQUEST,
  repertoireId,
  eventId,
});

export const createRepertoireInstanceSuccess = repertoireInstance => ({
  type: ACTION_TYPES.REPERTOIRE_INSTANCE.CREATE.SUCCESS,
  repertoireInstance,
});

export const createRepertoireInstanceFailure = error => ({
  type: ACTION_TYPES.REPERTOIRE_INSTANCE.CREATE.FAILURE,
  error,
});
