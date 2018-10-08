import { call, put, takeLatest } from 'redux-saga/effects';
import { getRepertoire } from '../../../services/api';
import {
  getAllRepertoireSuccess,
  getAllRepertoireFailure,
  actionTypes,
} from '../repertoire.actions';

function* fetchRepertoire() {
  try {
    const response = yield call(getRepertoire);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(getAllRepertoireSuccess(body));
    } else {
      yield put(getAllRepertoireFailure(body));
    }
  } catch (e) {
    yield put(getAllRepertoireFailure(e));
  }
}

function* fetchRepertoireSaga() {
  yield takeLatest(actionTypes.REPERTOIRE.GET_ALL.REQUEST, fetchRepertoire);
}

export default fetchRepertoireSaga;
