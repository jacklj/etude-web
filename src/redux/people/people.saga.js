import { call, put, takeLatest } from 'redux-saga/effects';
import { getPeople } from '../../services/api';
import { peopleFetchSuccess, peopleFetchFailure, ACTION_TYPES } from './people.actions';

function* fetchPeople() {
  try {
    const people = yield call(getPeople);
    const action = peopleFetchSuccess(people);
    yield put(action);
  } catch (e) {
    const action = peopleFetchFailure(e);
    yield put(action);
  }
}

function* fetchPeopleSaga() {
  yield takeLatest(ACTION_TYPES.PEOPLE.FETCH.REQUEST, fetchPeople);
}

export default fetchPeopleSaga;
