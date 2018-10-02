import { call, put, takeLatest } from 'redux-saga/effects';
import { getUpcomingRepertoire } from '../../services/api';
import { getUpcomingRepertoireSuccess, getUpcomingRepertoireFailure, actionTypes } from './repertoire.actions';

function* getUpcomingRepertoireGenerator() {
  try {
    const response = yield call(getUpcomingRepertoire);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(getUpcomingRepertoireSuccess(body));
    } else {
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
