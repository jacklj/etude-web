import { call, put, takeLatest } from 'redux-saga/effects';
import { getPeople } from '../../services/api';
import { getAllPeopleSuccess, getAllPeopleFailure, actionTypes } from './people.actions';

function* fetchPeople() {
  try {
    const people = yield call(getPeople);
    const action = getAllPeopleSuccess(people);
    yield put(action);
  } catch (e) {
    const action = getAllPeopleFailure(e);
    yield put(action);
  }
}

function* fetchPeopleSaga() {
  yield takeLatest(actionTypes.PEOPLE.GET_ALL.REQUEST, fetchPeople);
}

export default fetchPeopleSaga;
