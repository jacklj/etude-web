import {
  call, put, race, take,
} from 'redux-saga/effects';

import { finishPracticeSession } from '../../../../services/api';
import {
  ACTION_TYPES,
  tickPracticeTimer,
  finishPracticingSuccess,
  finishPracticingFailure,
} from '../../events.actions';

const ONE_SECOND = 1000;

const wait = ms => new Promise(resolve => {
  setTimeout(() => resolve(), ms);
});

function* runPracticeSessionSaga() {
  while (true) {
    // start the practice session either if just started successfully, or if restarting
    yield take([
      ACTION_TYPES.PRACTICE_SESSION.START.SUCCESS,
      ACTION_TYPES.PRACTICE_SESSION.RESTART,
    ]);

    while (true) {
      const { stop } = yield race({
        stop: take(ACTION_TYPES.PRACTICE_SESSION.FINISH.REQUEST),
        tick: call(wait, ONE_SECOND),
      });
      if (!stop) {
        yield put(tickPracticeTimer());
      } else {
        // stop the practice session on the server
        try {
          const response = yield call(finishPracticeSession, stop.eventId);
          const body = yield response.json();
          if (response.status === 200) {
            const actionToDispatch = finishPracticingSuccess(body);
            yield put(actionToDispatch);
            break; // exit the timer loop
          } else {
            const actionToDispatch = finishPracticingFailure(body);
            yield put(actionToDispatch);
            alert(
              "You can't finish a practice session before it's been started (but this shouldnt be able to happen)",
            );
            // dont exit the timer loop - keep timer going and wait for the next FINISH.REQUEST
          }
        } catch (e) {
          const actionToDispatch = finishPracticingFailure(e);
          yield put(actionToDispatch);
          // dont exit the timer loop - keep timer goinh and wait for the next FINISH.REQUEST
        }
      }
    }
  }
}

export default runPracticeSessionSaga;
