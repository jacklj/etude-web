import { call, put, takeLatest } from 'redux-saga/effects';

import { createPerson } from '../../../services/api';
import { addPersonSuccess, addPersonFailure, actionTypes } from '../people.actions';

function* createPersonGenerator(action) {
  const { person } = action;
  try {
    const response = yield call(createPerson, person);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(addPersonSuccess(body));
    } else {
      yield put(addPersonFailure(body));
    }
  } catch (e) {
    yield put(addPersonFailure(e));
  }
}

function* createPersonSaga() {
  yield takeLatest(actionTypes.PEOPLE.CREATE.REQUEST, createPersonGenerator);
}

export default createPersonSaga;
