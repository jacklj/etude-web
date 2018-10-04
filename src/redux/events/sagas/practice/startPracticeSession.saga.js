import { call, put, take } from 'redux-saga/effects';

import { startPracticeSession } from '../../../../services/api';
import {
  startPracticingSuccess,
  startPracticingFailure,
  actionTypes,
} from '../../events.actions';

function* startPracticeSessionSaga() {
  while (true) {
    const action = yield take(actionTypes.PRACTICE_SESSION.START.REQUEST);
    try {
      const response = yield call(startPracticeSession, action.eventId);
      const body = yield response.json();
      if (response.status === 200) {
        yield put(startPracticingSuccess(body));
      } else {
        yield put(startPracticingFailure(body));
        alert('A previous practice session is still in progress');
      }
    } catch (e) {
      const actionToDispatch = startPracticingFailure(e);
      yield put(actionToDispatch);
    }
  }
}

export default startPracticeSessionSaga;
