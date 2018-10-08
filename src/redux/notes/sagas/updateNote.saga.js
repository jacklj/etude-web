import { call, put, takeLatest } from 'redux-saga/effects';
import { updateNote } from '../../../services/api';
import { updateNoteSuccess, updateNoteFailure, actionTypes } from '../notes.actions';

function* updateNoteGenerator(action) {
  const { note } = action;
  const noteId = note.note_id;
  try {
    const response = yield call(updateNote, note, noteId);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(updateNoteSuccess(body));
    } else {
      yield put(updateNoteFailure(body));
    }
  } catch (e) {
    yield put(updateNoteFailure(e));
  }
}

function* updateNoteSaga() {
  yield takeLatest(actionTypes.NOTE.UPDATE.REQUEST, updateNoteGenerator);
}

export default updateNoteSaga;
