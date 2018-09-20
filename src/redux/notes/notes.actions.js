export const ACTION_TYPES = {
  NOTE: {
    CREATE_AND_ADD_TO: {
      EVENT: {
        REQUEST: 'NOTE.CREATE_AND_ADD_TO.EVENT.REQUEST',
        SUCCESS: 'NOTE.CREATE_AND_ADD_TO.EVENT.SUCCESS',
        FAILURE: 'NOTE.CREATE_AND_ADD_TO.EVENT.FAILURE',
      },
      ITEM: {
        REQUEST: 'NOTE.CREATE_AND_ADD_TO.ITEM.REQUEST',
        SUCCESS: 'NOTE.CREATE_AND_ADD_TO.ITEM.SUCCESS',
        FAILURE: 'NOTE.CREATE_AND_ADD_TO.ITEM.FAILURE',
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

export const createNoteAndAddToEventSuccess = note => ({
  type: ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.SUCCESS,
  note,
});

export const createNoteAndAddToEventFailure = error => ({
  type: ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.FAILURE,
  error,
});

export const createNoteAndAddToItemRequest = (note, itemId) => ({
  type: ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.ITEM.REQUEST,
  note,
  itemId,
});

export const createNoteAndAddToItemSuccess = note => ({
  type: ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.ITEM.SUCCESS,
  note,
});

export const createNoteAndAddToItemFailure = error => ({
  type: ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.ITEM.FAILURE,
  error,
});

export const updateNoteRequest = (note, noteId) => ({
  type: ACTION_TYPES.NOTE.UPDATE.REQUEST,
  note,
  noteId,
});

export const updateNoteSuccess = note => ({
  type: ACTION_TYPES.NOTE.UPDATE.SUCCESS,
  note,
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
