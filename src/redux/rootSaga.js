import { all } from 'redux-saga/effects';

import fetchAllEventsSaga from './events/fetchAllEvents.saga';
import fetchEventSaga from './events/fetchEvent.saga';
import fetchLocationsSaga from './locations/locations.saga';
import fetchPeopleSaga from './people/people.saga';

export default function* rootSaga() {
  yield all([
    fetchAllEventsSaga(),
    fetchEventSaga(),
    fetchLocationsSaga(),
    fetchPeopleSaga(),
  ]);
}
