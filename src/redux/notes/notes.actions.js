export const ACTION_TYPES = {
  NOTE: {
    CREATE_AND_ADD_TO: {
      EVENT: {
        REQUEST: 'NOTE.CREATE_AND_ADD_TO.EVENT.REQUEST',
        SUCCESS: 'NOTE.CREATE_AND_ADD_TO.EVENT.SUCCESS',
        FAILURE: 'NOTE.CREATE_AND_ADD_TO.EVENT.FAILURE',
      },
      REP_OR_EXERCISE_INSTANCE: {
        REQUEST: 'NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.REQUEST',
        SUCCESS: 'NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.SUCCESS',
        FAILURE: 'NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.FAILURE',
      },
    },
    UPDATE: {
      REQUEST: 'NOTE.UPDATE.REQUEST',
      SUCCESS: 'NOTE.UPDATE.SUCCESS',
      FAILURE: 'NOTE.UPDATE.FAILURE',
    },
    DELETE: {
      REQUEST: 'NOTE.DELETE.REQUEST',
      SUCCESS: 'NOTE.DELETE.SUCCESS',
      FAILURE: 'NOTE.DELETE.FAILURE',
    },
  },
};

export const createNoteAndAddToEventRequest = (note, eventId) => ({
  type: ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.REQUEST,
  note,
  eventId,
});

export const createNoteAndAddToEventSuccess = payload => ({
  type: ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.SUCCESS,
  payload,
});

export const createNoteAndAddToEventFailure = error => ({
  type: ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.FAILURE,
  error,
});

export const createNoteAndAddToRepOrExerciseInstanceRequest = (note, repOrExerciseInstanceId) => ({
  type: ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.REQUEST,
  note,
  repOrExerciseInstanceId,
});

export const createNoteAndAddToRepOrExerciseInstanceSuccess = payload => ({
  type: ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.SUCCESS,
  payload,
});

export const createNoteAndAddToRepOrExerciseInstanceFailure = error => ({
  type: ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.FAILURE,
  error,
});

export const updateNoteRequest = (note, noteId) => ({
  type: ACTION_TYPES.NOTE.UPDATE.REQUEST,
  note,
  noteId,
});

export const updateNoteSuccess = payload => ({
  type: ACTION_TYPES.NOTE.UPDATE.SUCCESS,
  payload,
});

export const updateNoteFailure = error => ({
  type: ACTION_TYPES.NOTE.UPDATE.FAILURE,
  error,
});

export const noteDeleteRequest = (noteId, eventId) => ({
  type: ACTION_TYPES.NOTE.DELETE.REQUEST,
  noteId,
  eventId,
});

export const noteDeleteSuccess = (noteId, eventId) => ({
  type: ACTION_TYPES.NOTE.DELETE.SUCCESS,
  noteId,
  eventId,
});

export const noteDeleteFailure = error => ({
  type: ACTION_TYPES.NOTE.DELETE.FAILURE,
  error,
});
