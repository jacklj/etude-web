import { call, put, takeLatest } from 'redux-saga/effects';
import { createExerciseInstance } from '../../../services/api';
import {
  createExerciseInstanceSuccess,
  createExerciseInstanceFailure,
  ACTION_TYPES,
} from '../repOrExerciseInstances.actions';

function* createExerciseInstanceGenerator(action) {
  const { exerciseId, eventId } = action;
  try {
    const response = yield call(createExerciseInstance, exerciseId, eventId);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(createExerciseInstanceSuccess(body));
    } else {
      yield put(createExerciseInstanceFailure(body));
    }
  } catch (e) {
    yield put(createExerciseInstanceFailure(e));
  }
}

function* createExerciseInstanceSaga() {
  yield takeLatest(
    ACTION_TYPES.EXERCISE_INSTANCE.CREATE.REQUEST,
    createExerciseInstanceGenerator,
  );
}

export default createExerciseInstanceSaga;
