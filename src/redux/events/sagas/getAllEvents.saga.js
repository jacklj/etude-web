import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllEvents } from '../../../services/api';
import { getAllEventsSuccess, getAllEventsFailure, actionTypes } from '../events.actions';

function* getAllEventsGenerator() {
  try {
    const response = yield call(getAllEvents);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(getAllEventsSuccess(body));
    } else {
      yield put(getAllEventsFailure(body));
    }
  } catch (e) {
    yield put(getAllEventsFailure(e));
  }
}

function* getAllEventsSaga() {
  yield takeLatest(actionTypes.EVENT.GET_ALL.REQUEST, getAllEventsGenerator);
}

export default getAllEventsSaga;
