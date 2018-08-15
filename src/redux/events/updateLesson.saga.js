import { call, put, takeLatest } from 'redux-saga/effects';
import { updateLesson } from '../../services/api';
import { lessonUpdateSuccess, lessonUpdateFailure, ACTION_TYPES } from './events.actions';

function* updateLessonGenerator(action) {
  const { lesson, eventId } = action;
  try {
    const updatedLesson = yield call(updateLesson, lesson, eventId);
    const actionToDispatch = lessonUpdateSuccess(updatedLesson);
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = lessonUpdateFailure(e);
    yield put(actionToDispatch);
  }
}

function* updateLessonSaga() {
  yield takeLatest(ACTION_TYPES.LESSON.UPDATE.REQUEST, updateLessonGenerator);
}

export default updateLessonSaga;
