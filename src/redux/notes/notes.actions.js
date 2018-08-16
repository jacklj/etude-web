export const ACTION_TYPES = {
  NOTE: {
    GENERAL: {
      CREATE: {
        REQUEST: 'NOTE.CREATE.REQUEST',
        SUCCESS: 'NOTE.CREATE.SUCCESS',
        FAILURE: 'NOTE.CREATE.FAILURE',
      },
      UPDATE: {
        REQUEST: 'NOTE.UPDATE.REQUEST',
        SUCCESS: 'NOTE.UPDATE.SUCCESS',
        FAILURE: 'NOTE.UPDATE.FAILURE',
      },
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
