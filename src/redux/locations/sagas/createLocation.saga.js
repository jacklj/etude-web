import { call, put, takeLatest } from 'redux-saga/effects';

import { createLocation } from '../../../services/api';
import { addLocationSuccess, addLocationFailure, actionTypes } from '../locations.actions';

function* createLocationGenerator(action) {
  const { location } = action;
  try {
    const response = yield call(createLocation, location);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(addLocationSuccess(body));
    } else {
      yield put(addLocationFailure(body));
    }
  } catch (e) {
    yield put(addLocationFailure(e));
  }
}

function* createLocationSaga() {
  yield takeLatest(actionTypes.LOCATIONS.CREATE.REQUEST, createLocationGenerator);
}

export default createLocationSaga;
