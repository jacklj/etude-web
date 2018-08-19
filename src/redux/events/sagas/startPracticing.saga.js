import moment from 'moment';
import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { EVENT_TYPES } from '../../../constants';
import { createPracticeSession } from '../../../services/api';
import { startPracticingSuccess, startPracticingFailure, ACTION_TYPES } from '../events.actions';

function* startPracticingGenerator() {
  const now = moment();
  const newPracticeSession = {
    start: now,
    type: EVENT_TYPES.PRACTICE,
  };

  try {
    const createdPracticeSession = yield call(createPracticeSession, newPracticeSession);
    const actionToDispatch = startPracticingSuccess(createdPracticeSession);
    yield put(actionToDispatch);
    const { event_id: id } = createdPracticeSession;
    yield put(push(`/practice_session/${id}`));
  } catch (e) {
    const actionToDispatch = startPracticingFailure(e);
    yield put(actionToDispatch);
  }
}

function* startPracticingSaga() {
  yield takeLatest(ACTION_TYPES.PRACTICE.START.REQUEST, startPracticingGenerator);
}

export default startPracticingSaga;
