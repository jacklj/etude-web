import { call, put, takeLatest } from 'redux-saga/effects';
import { updateNote } from '../../../services/api';
import { generalNoteUpdateSuccess, generalNoteUpdateFailure, ACTION_TYPES } from '../notes.actions';

function* updateGeneralNoteGenerator(action) {
  const { note } = action;
  const noteId = note.id;
  try {
    const updatedNote = yield call(updateNote, note, noteId);
    const actionToDispatch = generalNoteUpdateSuccess(updatedNote);
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = generalNoteUpdateFailure(e);
    yield put(actionToDispatch);
  }
}

function* updateGeneralNoteSaga() {
  yield takeLatest(ACTION_TYPES.NOTE.GENERAL.UPDATE.REQUEST, updateGeneralNoteGenerator);
}

export default updateGeneralNoteSaga;
