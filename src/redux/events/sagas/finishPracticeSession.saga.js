import { call, put, take } from 'redux-saga/effects';

import { finishPracticeSession } from '../../../services/api';
import {
  finishPracticingSuccess,
  finishPracticingFailure,
  ACTION_TYPES,
} from '../events.actions';

function* finishPracticeSessionSaga() {
  while (true) {
    const action = yield take(ACTION_TYPES.PRACTICE_SESSION.FINISH.REQUEST);
    try {
      const response = yield call(finishPracticeSession, action.eventId);
      const body = yield response.json();
      if (response.status === 200) {
        const actionToDispatch = finishPracticingSuccess(body);
        yield put(actionToDispatch);
      } else {
        const actionToDispatch = finishPracticingFailure(body);
        yield put(actionToDispatch);
        alert("You can't finish a practice session before it's been started")
      }
    } catch (e) {
      const actionToDispatch = finishPracticingFailure(e);
      yield put(actionToDispatch);
    }
  }
}

export default finishPracticeSessionSaga;
