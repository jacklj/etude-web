import { call, put, takeLatest } from 'redux-saga/effects';

import { getExercises } from '../../../services/api';
import {
  getAllExercisesSuccess,
  getAllExercisesFailure,
  actionTypes,
} from '../exercises.actions';

function* fetchExercises() {
  try {
    const response = yield call(getExercises);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(getAllExercisesSuccess(body));
    } else {
      yield put(getAllExercisesFailure(body));
    }
  } catch (e) {
    yield put(getAllExercisesFailure(e));
  }
}

function* fetchExercisesSaga() {
  yield takeLatest(actionTypes.EXERCISES.GET_ALL.REQUEST, fetchExercises);
}

export default fetchExercisesSaga;
