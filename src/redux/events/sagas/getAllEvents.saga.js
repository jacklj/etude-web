import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllEvents } from '../../../services/api';
import { allEventsFetchSuccess, allEventsFetchFailure, ACTION_TYPES } from '../events.actions';

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
  yield takeLatest(ACTION_TYPES.EVENT.FETCH_ALL.REQUEST, getAllEventsGenerator);
}

export default getAllEventsSaga;
