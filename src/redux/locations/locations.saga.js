import { call, put, takeLatest } from 'redux-saga/effects';
import { getLocations } from '../../services/api';
import { getAllLocationsSuccess, getAllLocationsFailure, actionTypes } from './locations.actions';

function* fetchLocations() {
  try {
    const locations = yield call(getLocations);
    const action = getAllLocationsSuccess(locations);
    yield put(action);
  } catch (e) {
    const action = getAllLocationsFailure(e);
    yield put(action);
  }
}

function* fetchLocationsSaga() {
  yield takeLatest(actionTypes.LOCATIONS.GET_ALL.REQUEST, fetchLocations);
}

export default fetchLocationsSaga;
