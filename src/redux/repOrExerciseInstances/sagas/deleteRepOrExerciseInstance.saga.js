import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteRepOrExerciseInstance } from '../../../services/api';
import { deleteRepOrExerciseInstanceSuccess, deleteRepOrExerciseInstanceFailure, ACTION_TYPES } from '../repOrExerciseInstances.actions';

function* deleteRepOrExerciseInstanceGenerator(action) {
  const { itemId, eventId } = action;
  try {
    yield call(deleteRepOrExerciseInstance, itemId);
    const actionToDispatch = deleteRepOrExerciseInstanceSuccess(itemId, eventId);
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = deleteRepOrExerciseInstanceFailure(e);
    yield put(actionToDispatch);
  }
}

function* deleteRepOrExerciseInstanceSaga() {
  yield takeLatest(ACTION_TYPES.REP_OR_EXERCISE_INSTANCE.DELETE.REQUEST,
    deleteRepOrExerciseInstanceGenerator);
}

export default deleteRepOrExerciseInstanceSaga;
