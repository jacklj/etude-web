export const actionTypes = {
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
  type: actionTypes.NOTE.CREATE_AND_ADD_TO.EVENT.REQUEST,
  note,
  eventId,
});

export const createNoteAndAddToEventSuccess = payload => ({
  type: actionTypes.NOTE.CREATE_AND_ADD_TO.EVENT.SUCCESS,
  payload,
});

export const createNoteAndAddToEventFailure = error => ({
  type: actionTypes.NOTE.CREATE_AND_ADD_TO.EVENT.FAILURE,
  error,
});

export const createNoteAndAddToRepOrExerciseInstanceRequest = (note, repOrExerciseInstanceId) => ({
  type: actionTypes.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.REQUEST,
  note,
  repOrExerciseInstanceId,
});

export const createNoteAndAddToRepOrExerciseInstanceSuccess = payload => ({
  type: actionTypes.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.SUCCESS,
  payload,
});

export const createNoteAndAddToRepOrExerciseInstanceFailure = error => ({
  type: actionTypes.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.FAILURE,
  error,
});

export const updateNoteRequest = (note, noteId) => ({
  type: actionTypes.NOTE.UPDATE.REQUEST,
  note,
  noteId,
});

export const updateNoteSuccess = payload => ({
  type: actionTypes.NOTE.UPDATE.SUCCESS,
  payload,
});

export const updateNoteFailure = error => ({
  type: actionTypes.NOTE.UPDATE.FAILURE,
  error,
});

export const noteDeleteRequest = (noteId, eventId) => ({
  type: actionTypes.NOTE.DELETE.REQUEST,
  noteId,
  eventId,
});

export const noteDeleteSuccess = (noteId, eventId) => ({
  type: actionTypes.NOTE.DELETE.SUCCESS,
  noteId,
  eventId,
});

export const noteDeleteFailure = error => ({
  type: actionTypes.NOTE.DELETE.FAILURE,
  error,
});
