import { call, put, take } from 'redux-saga/effects';

import { startPracticeSession } from '../../../services/api';
import {
  startPracticingSuccess,
  startPracticingFailure,
  ACTION_TYPES,
} from '../events.actions';

function* practiceFlow() {
  while (true) {
    const action = yield take(ACTION_TYPES.PRACTICE_SESSION.START.REQUEST);
    try {
      const inProgressPracticeSession = yield call(startPracticeSession, action.eventId);
      const actionToDispatch = startPracticingSuccess(inProgressPracticeSession);
      yield put(actionToDispatch);
    } catch (e) {
      const actionToDispatch = startPracticingFailure(e);
      yield put(actionToDispatch);
    }
  }
}

export default practiceFlow;
