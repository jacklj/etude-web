import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllEvents } from '../../../services/api';
import { allEventsFetchSuccess, allEventsFetchFailure, actionTypes } from '../events.actions';

function* getAllEventsGenerator() {
  try {
    const payload = yield call(getAllEvents);
    const action = allEventsFetchSuccess(payload);
    yield put(action);
  } catch (e) {
    const action = allEventsFetchFailure(e);
    yield put(action);
  }
}

function* getAllEventsSaga() {
  yield takeLatest(actionTypes.EVENT.FETCH_ALL.REQUEST, getAllEventsGenerator);
}

export default getAllEventsSaga;
