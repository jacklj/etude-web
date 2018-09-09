import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteEvent } from '../../../services/api';
import { deleteEventSuccess, deleteEventFailure, ACTION_TYPES } from '../events.actions';

function* deleteEventGenerator(action) {
  const { eventId } = action;
  try {
    const response = yield call(deleteEvent, eventId);
    if (response.status === 200) {
      const actionToDispatch = deleteEventSuccess(eventId);
      yield put(actionToDispatch);
    } else {
      const body = yield response.json();
      const actionToDispatch = deleteEventFailure(body);
      yield put(actionToDispatch);
    }
  } catch (e) {
    const actionToDispatch = deleteEventFailure(e);
    yield put(actionToDispatch);
  }
}

function* deleteEventSaga() {
  yield takeLatest(ACTION_TYPES.EVENT.DELETE.REQUEST, deleteEventGenerator);
}

export default deleteEventSaga;
