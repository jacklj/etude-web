import { all } from 'redux-saga/effects';

import fetchAllEventsSaga from './events/events.saga';
import fetchLocationsSaga from './locations/locations.saga';

export default function* rootSaga() {
  yield all([
    fetchAllEventsSaga(),
    fetchLocationsSaga(),
  ]);
}
