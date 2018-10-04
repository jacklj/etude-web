import { call, put, takeLatest } from 'redux-saga/effects';
import { updateNote } from '../../../services/api';
import { updateNoteSuccess, updateNoteFailure, actionTypes } from '../notes.actions';

function* updateNoteGenerator(action) {
  const { note } = action;
  const noteId = note.note_id;
  try {
    const updatedNote = yield call(updateNote, note, noteId);
    const actionToDispatch = updateNoteSuccess(updatedNote);
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = updateNoteFailure(e);
    yield put(actionToDispatch);
  }
}

function* updateNoteSaga() {
  yield takeLatest(actionTypes.NOTE.UPDATE.REQUEST, updateNoteGenerator);
}

export default updateNoteSaga;
