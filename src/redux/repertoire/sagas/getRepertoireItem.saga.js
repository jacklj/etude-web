import { call, put, takeLatest } from 'redux-saga/effects';
import { getRepertoireItem } from '../../../services/api';
import { getRepertoireSuccess, getRepertoireFailure, actionTypes } from '../repertoire.actions';

function* getRepertoireGenerator(action) {
  const { repertoireItemId } = action;
  try {
    const response = yield call(getRepertoireItem, repertoireItemId);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(getRepertoireSuccess(body));
    } else {
      yield put(getRepertoireFailure(body));
    }
  } catch (e) {
    yield put(getRepertoireFailure(e));
  }
}

function* getRepertoireSaga() {
  yield takeLatest(actionTypes.REPERTOIRE.GET.REQUEST, getRepertoireGenerator);
}

export default getRepertoireSaga;
