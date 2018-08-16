import { call, put, takeLatest } from 'redux-saga/effects';
import { createLesson } from '../../../services/api';
import { lessonCreateSuccess, lessonCreateFailure, ACTION_TYPES } from '../events.actions';

function* createLessonGenerator(action) {
  const { lesson } = action;
  try {
    const createdLesson = yield call(createLesson, lesson);
    const actionToDispatch = lessonCreateSuccess(createdLesson);
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = lessonCreateFailure(e);
    yield put(actionToDispatch);
  }
}

function* createLessonSaga() {
  yield takeLatest(ACTION_TYPES.LESSON.CREATE.REQUEST, createLessonGenerator);
}

export default createLessonSaga;
