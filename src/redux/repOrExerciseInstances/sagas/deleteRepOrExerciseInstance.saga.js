import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteRepOrExerciseInstance } from '../../../services/api';
import { deleteRepOrExerciseInstanceSuccess, deleteRepOrExerciseInstanceFailure, ACTION_TYPES } from '../repOrExerciseInstances.actions';

function* deleteRepOrExerciseInstanceGenerator(action) {
  const { repOrExerciseInstanceId, eventId } = action;
  try {
    const response = yield call(deleteRepOrExerciseInstance, repOrExerciseInstanceId);
    if (response.status === 200) {
      const actionToDispatch = deleteRepOrExerciseInstanceSuccess(repOrExerciseInstanceId, eventId);
      yield put(actionToDispatch);
    } else {
      const body = yield response.json();
      yield put(deleteRepOrExerciseInstanceFailure(body));
    }
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
