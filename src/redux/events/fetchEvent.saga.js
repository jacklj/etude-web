import { call, put, takeLatest } from 'redux-saga/effects';
import { getLesson } from '../../services/api';
import { eventFetchSuccess, eventFetchFailure, ACTION_TYPES } from './events.actions';

function* fetchEvent(action) {
  const { eventId } = action;
  try {
    const event = yield call(getLesson, eventId);
    const actionToDispatch = eventFetchSuccess(event);
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = eventFetchFailure(e);
    yield put(actionToDispatch);
  }
}

function* fetchEventSaga() {
  yield takeLatest(ACTION_TYPES.EVENT_FETCH.REQUEST, fetchEvent);
}

export default fetchEventSaga;
