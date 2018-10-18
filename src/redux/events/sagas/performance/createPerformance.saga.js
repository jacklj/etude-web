import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { createPerformance } from '../../../../services/api';
import { createPerformanceSuccess, createPerformanceFailure, actionTypes } from '../../events.actions';
import { EVENT_TYPES } from '../../../../services/constants';

function* createPerformanceGenerator() {
  const newEvent = {
    type: EVENT_TYPES.PERFORMANCE,
  };
  try {
    const response = yield call(createPerformance, newEvent);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(createPerformanceSuccess(body));
      // TODO 29th September 2018. Normalised response requires
      // Object.values(...)[0] - is this good?
      const { event_id: eventId } = Object.values(body.events)[0];
      // navigate to performance page
      yield put(push(`/performance/${eventId}`));
    } else {
      yield put(createPerformanceFailure(body));
    }
  } catch (e) {
    yield put(createPerformanceFailure(e));
  }
}

function* createPerformanceSaga() {
  yield takeLatest(actionTypes.PERFORMANCE.CREATE.REQUEST, createPerformanceGenerator);
}

export default createPerformanceSaga;
