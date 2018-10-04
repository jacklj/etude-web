import { call, put, takeLatest } from 'redux-saga/effects';

import { getExercises } from '../../services/api';
import {
  getAllExercisesSuccess,
  getAllExercisesFailure,
  actionTypes,
} from './exercises.actions';

function* fetchExercises() {
  try {
    const payload = yield call(getExercises);
    const action = getAllExercisesSuccess(payload);
    yield put(action);
  } catch (e) {
    const action = getAllExercisesFailure(e);
    yield put(action);
  }
}

function* fetchExercisesSaga() {
  yield takeLatest(actionTypes.EXERCISES.GET_ALL.REQUEST, fetchExercises);
}

export default fetchExercisesSaga;
