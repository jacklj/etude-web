import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { createLesson } from '../../../../services/api';
import { lessonCreateSuccess, lessonCreateFailure, ACTION_TYPES } from '../../events.actions';

function* createLessonGenerator() {
  try {
    const response = yield call(createLesson);
    const actionToDispatch = lessonCreateSuccess(response);
    yield put(actionToDispatch);

    // navigate to lesson page
    // TODO 29th September 2018. Normalised response requires Object.keys(...)[0] - is this good?
    const { event_id: eventId } = Object.keys(response.events)[0];
    yield put(push(`/lesson/${eventId}`));
  } catch (e) {
    const actionToDispatch = lessonCreateFailure(e);
    yield put(actionToDispatch);
  }
}

function* createLessonSaga() {
  yield takeLatest(ACTION_TYPES.LESSON.CREATE.REQUEST, createLessonGenerator);
}

export default createLessonSaga;
