import { call, put, takeLatest } from 'redux-saga/effects';
import { createExerciseInstance } from '../../../services/api';
import {
  createExerciseInstanceSuccess,
  createExerciseInstanceFailure,
  ACTION_TYPES,
} from '../items.actions';

function* createExerciseInstanceGenerator(action) {
  const { exerciseId, eventId } = action;
  try {
    const newExerciseInstance = yield call(createExerciseInstance, exerciseId, eventId);
    const actionToDispatch = createExerciseInstanceSuccess(newExerciseInstance);
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = createExerciseInstanceFailure(e);
    yield put(actionToDispatch);
  }
}

function* createExerciseInstanceSaga() {
  yield takeLatest(
    ACTION_TYPES.EXERCISE_INSTANCE.CREATE.REQUEST,
    createExerciseInstanceGenerator,
  );
}

export default createExerciseInstanceSaga;
