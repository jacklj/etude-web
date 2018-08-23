import { call, put, take } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { startPracticeSession, finishPracticeSession } from '../../../services/api';
import {
  startPracticingSuccess,
  startPracticingFailure,
  finishPracticingSuccess,
  finishPracticingFailure,
  ACTION_TYPES,
} from '../events.actions';

function* practiceFlow() {
  while (true) {
    yield take(ACTION_TYPES.PRACTICE.START.REQUEST);
    try {
      const inProgressPracticeSession = yield call(startPracticeSession);
      const actionToDispatch = startPracticingSuccess(inProgressPracticeSession);
      yield put(actionToDispatch);

      // navigate to practie session page
      const { event_id: eventId } = inProgressPracticeSession;
      yield put(push(`/practice_session/${eventId}`));
    } catch (e) {
      const actionToDispatch = startPracticingFailure(e);
      yield put(actionToDispatch);
    }

    const action = yield take(ACTION_TYPES.PRACTICE.FINISH.REQUEST);
    try {
      const { eventId } = action;
      const result = yield call(finishPracticeSession, eventId);
      const actionToDispatch = finishPracticingSuccess(result);
      yield put(actionToDispatch);
    } catch (e) {
      const actionToDispatch = finishPracticingFailure(e);
      yield put(actionToDispatch);
    }
  }
}

export default practiceFlow;
