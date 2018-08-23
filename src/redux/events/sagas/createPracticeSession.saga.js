import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { createPracticeSession } from '../../../services/api';
import {
  createPracticeSessionSuccess,
  createPracticeSessionFailure,
  ACTION_TYPES,
} from '../events.actions';

function* createPracticeSessionGenerator() {
  try {
    const newPracticeSession = yield call(createPracticeSession);
    const actionToDispatch = createPracticeSessionSuccess(newPracticeSession);
    yield put(actionToDispatch);

    // navigate to practice session page
    const { event_id: eventId } = newPracticeSession;
    yield put(push(`/practice_session/${eventId}`));
  } catch (e) {
    const actionToDispatch = createPracticeSessionFailure(e);
    yield put(actionToDispatch);
  }
}

function* createPracticeSessionSaga() {
  yield takeLatest(ACTION_TYPES.PRACTICE_SESSION.CREATE.REQUEST, createPracticeSessionGenerator);
}

export default createPracticeSessionSaga;
