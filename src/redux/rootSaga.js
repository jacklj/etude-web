import { all } from 'redux-saga/effects';

import fetchAllEventsSaga from './events/events.saga';

export default function* rootSaga() {
  yield all([
    fetchAllEventsSaga(),
  ]);
}
