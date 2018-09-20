import { call, put, takeLatest } from 'redux-saga/effects';
import { createNote } from '../../../services/api';
import {
  createNoteAndAddToEventSuccess,
  createNoteAndAddToEventFailure,
  createNoteAndAddToItemSuccess,
  createNoteAndAddToItemFailure,
  ACTION_TYPES,
} from '../notes.actions';

// One saga, rather than 2, to see if it's more readable long term, and also
// because it uses the same endpoint for either type of note, so it felt like there
// would be lots of code reuse
function* createNoteGenerator(action) {
  const { note, type } = action;
  const noteWithId = { ...note };

  const isEventNote = type === ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.REQUEST;
  const isItemNote = type === ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.ITEM.REQUEST;
  if (isEventNote) {
    const { eventId } = action;
    noteWithId.event_id = eventId;
  } else if (isItemNote) {
    const { itemId } = action;
    noteWithId.item_id = itemId;
  } else {
    throw new Error('Trying to create a note without attaching it to an event or item');
  }

  let actionToDispatch;
  try {
    const newNote = yield call(createNote, noteWithId);
    if (isEventNote) {
      actionToDispatch = createNoteAndAddToEventSuccess(newNote);
    } else if (isItemNote) {
      actionToDispatch = createNoteAndAddToItemSuccess(newNote);
    }
  } catch (e) {
    if (isEventNote) {
      actionToDispatch = createNoteAndAddToEventFailure(e);
    } else if (isItemNote) {
      actionToDispatch = createNoteAndAddToItemFailure(e);
    }
  }
  yield put(actionToDispatch);
}

function* createNoteSaga() {
  yield takeLatest(
    [
      ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.REQUEST,
      ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.ITEM.REQUEST,
    ],
    createNoteGenerator,
  );
}

export default createNoteSaga;
