import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { createPracticeSession } from '../../../../services/api';
import {
  createPracticeSessionSuccess,
  createPracticeSessionFailure,
  ACTION_TYPES,
} from '../../events.actions';

function* createPracticeSessionGenerator() {
  try {
    const response = yield call(createPracticeSession);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(createPracticeSessionSuccess(body));
      // navigate to practice session page
      const { event_id: eventId } = Object.values(body.events)[0];
      yield put(push(`/practice_session/${eventId}`));
    } else {
      yield put(createPracticeSessionFailure(body));
    }
  } catch (e) {
    yield put(createPracticeSessionFailure(e));
  }
}

function* createPracticeSessionSaga() {
  yield takeLatest(ACTION_TYPES.PRACTICE_SESSION.CREATE.REQUEST, createPracticeSessionGenerator);
}

export default createPracticeSessionSaga;
