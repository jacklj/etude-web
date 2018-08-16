export const ACTION_TYPES = {
  NOTE: {
    GENERAL: {
      CREATE: {
        REQUEST: 'NOTE.GENERAL.CREATE.REQUEST',
        SUCCESS: 'NOTE.GENERAL.CREATE.SUCCESS',
        FAILURE: 'NOTE.GENERAL.CREATE.FAILURE',
      },
      UPDATE: {
        REQUEST: 'NOTE.GENERAL.UPDATE.REQUEST',
        SUCCESS: 'NOTE.GENERAL.UPDATE.SUCCESS',
        FAILURE: 'NOTE.GENERAL.UPDATE.FAILURE',
      },
    },
    DELETE: {
      REQUEST: 'NOTE.DELETE.REQUEST',
      SUCCESS: 'NOTE.DELETE.SUCCESS',
      FAILURE: 'NOTE.DELETE.FAILURE',
    },
  },
};

export const generalNoteCreateRequest = (note, eventId) => ({
  type: ACTION_TYPES.NOTE.GENERAL.CREATE.REQUEST,
  note,
  eventId,
});

export const generalNoteCreateSuccess = note => ({
  type: ACTION_TYPES.NOTE.GENERAL.CREATE.SUCCESS,
  note,
});

export const generalNoteCreateFailure = error => ({
  type: ACTION_TYPES.NOTE.GENERAL.CREATE.FAILURE,
  error,
});

export const generalNoteUpdateRequest = (note, noteId) => ({
  type: ACTION_TYPES.NOTE.GENERAL.UPDATE.REQUEST,
  note,
  noteId,
});

export const generalNoteUpdateSuccess = note => ({
  type: ACTION_TYPES.NOTE.GENERAL.UPDATE.SUCCESS,
  note,
});

export const generalNoteUpdateFailure = error => ({
  type: ACTION_TYPES.NOTE.GENERAL.UPDATE.FAILURE,
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
