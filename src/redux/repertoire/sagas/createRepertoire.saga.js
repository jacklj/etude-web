import { call, put, takeLatest } from 'redux-saga/effects';

import { createNewRepertoire } from '../../../services/api';
import { addNewRepertoireSuccess, addNewRepertoireFailure, actionTypes } from '../repertoire.actions';

function* createRepertoire(action) {
  const { newRepertoire } = action;
  try {
    const response = yield call(createNewRepertoire, newRepertoire);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(addNewRepertoireSuccess(body));
    } else {
      yield put(addNewRepertoireFailure(body));
    }
  } catch (e) {
    yield put(addNewRepertoireFailure(e));
  }
}

function* createRepertoireSaga() {
  yield takeLatest(actionTypes.REPERTOIRE.CREATE.REQUEST, createRepertoire);
}

export default createRepertoireSaga;
