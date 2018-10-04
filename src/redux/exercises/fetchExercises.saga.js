import { call, put, takeLatest } from 'redux-saga/effects';

import { getExercises } from '../../services/api';
import {
  fetchAllExercisesSuccess,
  fetchAllExercisesFailure,
  actionTypes,
} from './exercises.actions';

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
  yield takeLatest(actionTypes.EXERCISES.FETCH_ALL.REQUEST, fetchExercises);
}

export default fetchExercisesSaga;
