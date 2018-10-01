import {
  call, put, race, select, take,
} from 'redux-saga/effects';
import moment from 'moment';

import { finishPracticeSession } from '../../../../services/api';
import { selectInProgressEvent } from '../../../reduxOrm/selectors/events.selectors';
import {
  ACTION_TYPES,
  tickPracticeTimer,
  finishPracticingSuccess,
  finishPracticingFailure,
  initialiseTimer,
} from '../../events.actions';

const ONE_SECOND = 1000;

const wait = ms => new Promise(resolve => {
  setTimeout(() => resolve(true), ms);
});

function* runPracticeSessionSaga() {
  while (true) {
    // start the practice session either if just started successfully, or if restarting
    yield take([
      // user has just explicitly started a practice session
      ACTION_TYPES.PRACTICE_SESSION.START.SUCCESS,
      // events have been updated - an in progress practice session may exist
      ACTION_TYPES.EVENT.FETCH.SUCCESS,
      ACTION_TYPES.EVENT.FETCH_ALL.SUCCESS,
    ]);

    // check that there is an in progress practice session in the store
    const inProgressEvent = yield select(selectInProgressEvent);

    if (inProgressEvent) {
      // TODO only need to initialise timer when it's its a previous in progress event
      // - if the event was actually just started, the initial timer value is 0, and
      // it already is 0 in the store, by default
      const { start } = inProgressEvent;
      const now = moment();
      const initialTime = now.diff(start, 'seconds');
      yield put(initialiseTimer(initialTime)); // initialises the practice timer correctly

      while (true) {
        const { tick, stop, deleteEvent } = yield race({
          tick: call(wait, ONE_SECOND),
          stop: take(ACTION_TYPES.PRACTICE_SESSION.FINISH.REQUEST),
          deleteEvent: take(ACTION_TYPES.EVENT.DELETE.SUCCESS), // in case inProgress event deleted
        });
        if (tick) { // tick has resolved to true
          yield put(tickPracticeTimer());
        } else if (stop) {
          // stop the practice session on the server
          try {
            const response = yield call(finishPracticeSession, stop.eventId);
            const body = yield response.json();
            if (response.status === 200) {
              yield put(finishPracticingSuccess(body));
              break; // exit the timer loop
            } else {
              yield put(finishPracticingFailure(body));
              alert( // eslint-disable-line no-alert
                "You can't finish a practice session before it's been started (but this shouldnt be able to happen)",
              );
              // dont exit the timer loop - keep timer going and wait for the next FINISH.REQUEST
            }
          } catch (e) {
            yield put(finishPracticingFailure(e));
            // dont exit the timer loop - keep timer goinh and wait for the next FINISH.REQUEST
          }
        } else {
          const deletedEventId = deleteEvent.eventId;
          const inProgressEventId = inProgressEvent.event_id;
          if (deletedEventId === inProgressEventId) {
            break; // exit the timer loop
          }
          // else don't exit the timer loop - the deleted event wasnt the in progress one
        }
      }
    }
  }
}

export default runPracticeSessionSaga;
