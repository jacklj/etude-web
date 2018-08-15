import { call, put, takeLatest } from 'redux-saga/effects';
import { getTimeline } from '../../services/api';
import { allEventsFetchSuccess, allEventsFetchFailure, ACTION_TYPES } from './events.actions';

function* fetchAllEvents() {
  try {
    const allEvents = yield call(getTimeline);
    const action = allEventsFetchSuccess(allEvents);
    yield put(action);
  } catch (e) {
    const action = allEventsFetchFailure(e);
    yield put(action);
  }
}

function* fetchAllEventsSaga() {
  yield takeLatest(ACTION_TYPES.EVENT.FETCH_ALL.REQUEST, fetchAllEvents);
}

export default fetchAllEventsSaga;
