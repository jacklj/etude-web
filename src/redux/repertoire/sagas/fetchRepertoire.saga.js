import { call, put, takeLatest } from 'redux-saga/effects';
import { getRepertoire } from '../../../services/api';
import {
  fetchAllRepertoireSuccess,
  fetchAllRepertoireFailure,
  actionTypes,
} from '../repertoire.actions';

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
  yield takeLatest(actionTypes.REPERTOIRE.FETCH_ALL.REQUEST, fetchRepertoire);
}

export default fetchRepertoireSaga;
