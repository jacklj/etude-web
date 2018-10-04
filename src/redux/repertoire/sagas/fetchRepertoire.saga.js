import { call, put, takeLatest } from 'redux-saga/effects';
import { getRepertoire } from '../../../services/api';
import {
  getAllRepertoireSuccess,
  getAllRepertoireFailure,
  actionTypes,
} from '../repertoire.actions';

function* fetchRepertoire() {
  try {
    const payload = yield call(getRepertoire);
    const action = getAllRepertoireSuccess(payload);
    yield put(action);
  } catch (e) {
    const action = getAllRepertoireFailure(e);
    yield put(action);
  }
}

function* fetchRepertoireSaga() {
  yield takeLatest(actionTypes.REPERTOIRE.GET_ALL.REQUEST, fetchRepertoire);
}

export default fetchRepertoireSaga;
