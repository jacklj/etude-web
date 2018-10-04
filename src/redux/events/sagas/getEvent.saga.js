import { call, put, takeLatest } from 'redux-saga/effects';
import { getEvent } from '../../../services/api';
import { eventFetchSuccess, eventFetchFailure, actionTypes } from '../events.actions';

function* getEventGenerator(action) {
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

function* getEventSaga() {
  yield takeLatest(actionTypes.EVENT.FETCH.REQUEST, getEventGenerator);
}

export default getEventSaga;
