import { call, put, take } from 'redux-saga/effects';

import { startPracticeSession } from '../../../../services/api';
import {
  startPracticingSuccess,
  startPracticingFailure,
  startPracticeTimer,
  ACTION_TYPES,
} from '../../events.actions';

function* practiceFlow() {
  while (true) {
    const action = yield take(ACTION_TYPES.PRACTICE_SESSION.START.REQUEST);
    try {
      const response = yield call(startPracticeSession, action.eventId);
      const body = yield response.json();
      if (response.status === 200) {
        const actionToDispatch = startPracticingSuccess(body);
        yield put(actionToDispatch);
        const action2 = startPracticeTimer();
        yield put(action2);
      } else {
        const actionToDispatch = startPracticingFailure(body);
        yield put(actionToDispatch);
        alert('A previous practice session is still in progress');
      }
    } catch (e) {
      const actionToDispatch = startPracticingFailure(e);
      yield put(actionToDispatch);
    }
  }
}

export default practiceFlow;
