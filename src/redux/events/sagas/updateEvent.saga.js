import { call, put, takeLatest } from 'redux-saga/effects';

import { updateEvent } from '../../../services/api';
import { updateEventSuccess, updateEventFailure, ACTION_TYPES } from '../events.actions';

function* updateEventGenerator(action) {
  const { event, eventId } = action;
  try {
    const response = yield call(updateEvent, event, eventId);
    const body = yield response.json();
    let actionToDispatch;
    if (response.status === 200) {
      actionToDispatch = updateEventSuccess(body);
    } else {
      actionToDispatch = updateEventFailure(body);
    }
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = updateEventFailure(e);
    yield put(actionToDispatch);
  }
}

function* updateEventSaga() {
  yield takeLatest(ACTION_TYPES.EVENT.UPDATE.REQUEST, updateEventGenerator);
}

export default updateEventSaga;
