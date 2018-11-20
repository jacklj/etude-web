import { call, put, takeLatest } from 'redux-saga/effects';

import { createExercise } from '../../../services/api';
import { addExerciseSuccess, addExerciseFailure, actionTypes } from '../exercises.actions';

function* createExerciseGenerator(action) {
  const { newRepertoire } = action;
  try {
    const response = yield call(createExercise, newRepertoire);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(addExerciseSuccess(body));
    } else {
      yield put(addExerciseFailure(body));
    }
  } catch (e) {
    yield put(addExerciseFailure(e));
  }
}

function* createExerciseSaga() {
  yield takeLatest(actionTypes.EXERCISES.CREATE.REQUEST, createExerciseGenerator);
}

export default createExerciseSaga;
