import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteNote } from '../../../services/api';
import { deleteNoteSuccess, deleteNoteFailure, actionTypes } from '../notes.actions';

function* deleteNoteGenerator(action) {
  const { noteId } = action;
  try {
    const response = yield call(deleteNote, noteId);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(deleteNoteSuccess(noteId));
    } else {
      yield put(deleteNoteFailure(body));
    }
  } catch (e) {
    yield put(deleteNoteFailure(e));
  }
}

function* deleteNoteSaga() {
  yield takeLatest(actionTypes.NOTE.DELETE.REQUEST, deleteNoteGenerator);
}

export default deleteNoteSaga;
