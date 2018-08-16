import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteNote } from '../../../services/api';
import { noteDeleteSuccess, noteDeleteFailure, ACTION_TYPES } from '../notes.actions';

function* deleteNoteGenerator(action) {
  const { noteId, eventId } = action;
  try {
    yield call(deleteNote, noteId);
    const actionToDispatch = noteDeleteSuccess(noteId, eventId);
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = noteDeleteFailure(e);
    yield put(actionToDispatch);
  }
}

function* deleteNoteSaga() {
  yield takeLatest(ACTION_TYPES.NOTE.DELETE.REQUEST, deleteNoteGenerator);
}

export default deleteNoteSaga;
