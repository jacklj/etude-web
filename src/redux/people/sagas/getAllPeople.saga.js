import { call, put, takeLatest } from 'redux-saga/effects';

import { getPeople } from '../../../services/api';
import { getAllPeopleSuccess, getAllPeopleFailure, actionTypes } from '../people.actions';

function* fetchPeople() {
  try {
    const response = yield call(getPeople);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(getAllPeopleSuccess(body));
    } else {
      yield put(getAllPeopleFailure(body));
    }
  } catch (e) {
    yield put(getAllPeopleFailure(e));
  }
}

function* fetchPeopleSaga() {
  yield takeLatest(actionTypes.PEOPLE.GET_ALL.REQUEST, fetchPeople);
}

export default fetchPeopleSaga;
