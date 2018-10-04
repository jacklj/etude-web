import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllEvents } from '../../../services/api';
import { getAllEventsSuccess, getAllEventsFailure, actionTypes } from '../events.actions';

function* getAllEventsGenerator() {
  try {
    const payload = yield call(getAllEvents);
    const action = getAllEventsSuccess(payload);
    yield put(action);
  } catch (e) {
    const action = getAllEventsFailure(e);
    yield put(action);
  }
}

function* getAllEventsSaga() {
  yield takeLatest(actionTypes.EVENT.GET_ALL.REQUEST, getAllEventsGenerator);
}

export default getAllEventsSaga;
