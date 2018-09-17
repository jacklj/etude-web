import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { createLesson } from '../../../../services/api';
import { lessonCreateSuccess, lessonCreateFailure, ACTION_TYPES } from '../../events.actions';

function* createLessonGenerator() {
  try {
    const newLesson = yield call(createLesson);
    const actionToDispatch = lessonCreateSuccess(newLesson);
    yield put(actionToDispatch);

    // navigate to lesson page
    const { event_id: eventId } = newLesson;
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
