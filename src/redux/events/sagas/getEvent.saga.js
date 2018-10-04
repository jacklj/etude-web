import { call, put, takeLatest } from 'redux-saga/effects';
import { getEvent } from '../../../services/api';
import { getEventSuccess, getEventFailure, actionTypes } from '../events.actions';

function* getEventGenerator(action) {
  const { eventId } = action;
  try {
    const response = yield call(getEvent, eventId);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(getEventSuccess(body));
    } else {
      yield put(getEventFailure(body));
    }
  } catch (e) {
    yield put(getEventFailure(e));
  }
}

function* getEventSaga() {
  yield takeLatest(actionTypes.EVENT.GET.REQUEST, getEventGenerator);
}

export default getEventSaga;
