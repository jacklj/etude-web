import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteNote } from '../../../services/api';
import { deleteNoteSuccess, deleteNoteFailure, actionTypes } from '../notes.actions';

function* deleteNoteGenerator(action) {
  const { noteId, eventId } = action;
  try {
    yield call(deleteNote, noteId);
    const actionToDispatch = deleteNoteSuccess(noteId, eventId);
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = deleteNoteFailure(e);
    yield put(actionToDispatch);
  }
}

function* deleteNoteSaga() {
  yield takeLatest(actionTypes.NOTE.DELETE.REQUEST, deleteNoteGenerator);
}

export default deleteNoteSaga;
