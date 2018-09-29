import { call, put, takeLatest } from 'redux-saga/effects';
import { getEvent } from '../../../services/api';
import { eventFetchSuccess, eventFetchFailure, ACTION_TYPES } from '../events.actions';

function* fetchEvent(action) {
  const { eventId } = action;
  try {
    const response = yield call(getEvent, eventId);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(eventFetchSuccess(body));
    } else {
      yield put(eventFetchFailure(body));
    }
  } catch (e) {
    yield put(eventFetchFailure(e));
  }
}

function* fetchEventSaga() {
  yield takeLatest(ACTION_TYPES.EVENT.FETCH.REQUEST, fetchEvent);
}

export default fetchEventSaga;
