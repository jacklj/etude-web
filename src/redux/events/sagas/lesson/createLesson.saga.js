import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { createLesson } from '../../../../services/api';
import { lessonCreateSuccess, lessonCreateFailure, ACTION_TYPES } from '../../events.actions';
import { EVENT_TYPES } from '../../../../constants';

function* createLessonGenerator() {
  const newEvent = {
    type: EVENT_TYPES.LESSON,
  };
  try {
    const response = yield call(createLesson, newEvent);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(lessonCreateSuccess(body));

      // TODO 29th September 2018. Normalised response requires
      // Object.values(...)[0] - is this good?
      const { event_id: eventId } = Object.values(response.events)[0];
      // navigate to lesson page
      yield put(push(`/lesson/${eventId}`));
    } else {
      yield put(lessonCreateFailure(body));
    }
  } catch (e) {
    yield put(lessonCreateFailure(e));
  }
}

function* createLessonSaga() {
  yield takeLatest(ACTION_TYPES.LESSON.CREATE.REQUEST, createLessonGenerator);
}

export default createLessonSaga;
