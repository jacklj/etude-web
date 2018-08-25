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
      const finishedPracticeSession = yield call(finishPracticeSession, action.eventId);
      const actionToDispatch = finishPracticingSuccess(finishedPracticeSession);
      yield put(actionToDispatch);
    } catch (e) {
      const actionToDispatch = finishPracticingFailure(e);
      yield put(actionToDispatch);
    }
  }
}

export default finishPracticeSessionSaga;
