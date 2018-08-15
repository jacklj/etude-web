export const ACTION_TYPES = {
  NOTE: {
    GENERAL: {
      CREATE: {
        REQUEST: 'NOTE.CREATE.REQUEST',
        SUCCESS: 'NOTE.CREATE.SUCCESS',
        FAILURE: 'NOTE.CREATE.FAILURE',
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
