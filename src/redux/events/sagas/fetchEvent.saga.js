import { call, put, takeLatest } from 'redux-saga/effects';
import { getEvent } from '../../../services/api';
import { eventFetchSuccess, eventFetchFailure, ACTION_TYPES } from '../events.actions';

function* fetchEvent(action) {
  const { eventId } = action;
  try {
    const payload = yield call(getEvent, eventId);
    const actionToDispatch = eventFetchSuccess(payload);
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = eventFetchFailure(e);
    yield put(actionToDispatch);
  }
}

function* fetchEventSaga() {
  yield takeLatest(ACTION_TYPES.EVENT.FETCH.REQUEST, fetchEvent);
}

export default fetchEventSaga;
