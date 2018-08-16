import { call, put, takeLatest } from 'redux-saga/effects';
import { createNote } from '../../../services/api';
import { generalNoteCreateSuccess, generalNoteCreateFailure, ACTION_TYPES } from '../notes.actions';

function* createGeneralNoteGenerator(action) {
  const { note, eventId } = action;
  const noteWithEventId = { ...note, event_id: eventId };
  try {
    const newNote = yield call(createNote, noteWithEventId);
    const actionToDispatch = generalNoteCreateSuccess(newNote);
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = generalNoteCreateFailure(e);
    yield put(actionToDispatch);
  }
}

function* createGeneralNoteSaga() {
  yield takeLatest(ACTION_TYPES.NOTE.GENERAL.CREATE.REQUEST, createGeneralNoteGenerator);
}

export default createGeneralNoteSaga;
