import { all } from 'redux-saga/effects';

import fetchAllEventsSaga from './events/events.saga';
import fetchLocationsSaga from './locations/locations.saga';
import fetchPeopleSaga from './people/people.saga';

export default function* rootSaga() {
  yield all([
    fetchAllEventsSaga(),
    fetchLocationsSaga(),
    fetchPeopleSaga(),
  ]);
}
