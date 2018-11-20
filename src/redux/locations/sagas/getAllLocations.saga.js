import { call, put, takeLatest } from 'redux-saga/effects';
import { getLocations } from '../../../services/api';
import { getAllLocationsSuccess, getAllLocationsFailure, actionTypes } from '../locations.actions';

function* fetchLocations() {
  try {
    const response = yield call(getLocations);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(getAllLocationsSuccess(body));
    } else {
      yield put(getAllLocationsFailure(body));
    }
  } catch (e) {
    yield put(getAllLocationsFailure(e));
  }
}

function* fetchLocationsSaga() {
  yield takeLatest(actionTypes.LOCATIONS.GET_ALL.REQUEST, fetchLocations);
}

export default fetchLocationsSaga;
