import {
  call, put, race, take,
} from 'redux-saga/effects';

import { ACTION_TYPES, tickPracticeTimer } from '../../events.actions';

const ONE_SECOND = 1000;

const wait = ms => new Promise(resolve => {
  setTimeout(() => resolve(), ms);
});

function* runTimer() {
  while (yield take(ACTION_TYPES.PRACTICE_SESSION.TIMER.START)) {
    while (true) {
      const { stop } = yield race({
        stop: take(ACTION_TYPES.PRACTICE_SESSION.TIMER.STOP),
        tick: call(wait, ONE_SECOND),
      });
      if (!stop) {
        yield put(tickPracticeTimer());
      } else {
        break;
      }
    }
  }
}

export default runTimer;
