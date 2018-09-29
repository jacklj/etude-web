import { call, put, takeLatest } from 'redux-saga/effects';
import { getExercises } from '../../../services/api';
import { fetchAllExercisesSuccess, fetchAllExercisesFailure, ACTION_TYPES } from '../repOrExerciseInstances.actions';

function* fetchExercises() {
  try {
    const payload = yield call(getExercises);
    const action = fetchAllExercisesSuccess(payload);
    yield put(action);
  } catch (e) {
    const action = fetchAllExercisesFailure(e);
    yield put(action);
  }
}

function* fetchExercisesSaga() {
  yield takeLatest(ACTION_TYPES.EXERCISES.FETCH_ALL.REQUEST, fetchExercises);
}

export default fetchExercisesSaga;
