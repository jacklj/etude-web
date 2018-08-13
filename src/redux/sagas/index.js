import { all } from 'redux-saga/effects';

import fetchAllEventsSaga from './events';

export default function* rootSaga() {
  yield all([
    fetchAllEventsSaga(),
  ]);
}
