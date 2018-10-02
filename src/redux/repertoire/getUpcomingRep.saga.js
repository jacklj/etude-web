import { call, put, takeLatest } from 'redux-saga/effects';
import { getUpcomingRepertoire } from '../../services/api';
import { getUpcomingRepertoireSuccess, getUpcomingRepertoireFailure, actionTypes } from './repertoire.actions';

function* getUpcomingRepertoireGenerator() {
   console.log(1)
  try {
    const response = yield call(getUpcomingRepertoire);
    const body = yield response.json();
    console.log(2)
    if (response.status === 200) {
      console.log(3)
      yield put(getUpcomingRepertoireSuccess(body));
    } else {

      console.log(4)
      yield put(getUpcomingRepertoireFailure(body));
    }
  } catch (e) {
    yield put(getUpcomingRepertoireFailure(e));
  }
}

function* getUpcomingRepertoireSaga() {
  yield takeLatest(actionTypes.UPCOMING_REPERTOIRE.GET.REQUEST, getUpcomingRepertoireGenerator);
}

export default getUpcomingRepertoireSaga;
