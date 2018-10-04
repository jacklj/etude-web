import { call, put, takeLatest } from 'redux-saga/effects';
import { getLocations } from '../../services/api';
import { locationsFetchSuccess, locationsFetchFailure, actionTypes } from './locations.actions';

function* fetchLocations() {
  try {
    const locations = yield call(getLocations);
    const action = locationsFetchSuccess(locations);
    yield put(action);
  } catch (e) {
    const action = locationsFetchFailure(e);
    yield put(action);
  }
}

function* fetchLocationsSaga() {
  yield takeLatest(actionTypes.LOCATIONS.FETCH.REQUEST, fetchLocations);
}

export default fetchLocationsSaga;
