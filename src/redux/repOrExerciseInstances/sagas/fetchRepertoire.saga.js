import { call, put, takeLatest } from 'redux-saga/effects';
import { getRepertoire } from '../../../services/api';
import { fetchAllRepertoireSuccess, fetchAllRepertoireFailure, ACTION_TYPES } from '../repOrExerciseInstances.actions';

function* fetchRepertoire() {
  try {
    const payload = yield call(getRepertoire);
    const action = fetchAllRepertoireSuccess(payload);
    yield put(action);
  } catch (e) {
    const action = fetchAllRepertoireFailure(e);
    yield put(action);
  }
}

function* fetchRepertoireSaga() {
  yield takeLatest(ACTION_TYPES.REPERTOIRE.FETCH_ALL.REQUEST, fetchRepertoire);
}

export default fetchRepertoireSaga;
