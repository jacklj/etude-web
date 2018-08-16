import { all } from 'redux-saga/effects';

import fetchAllEventsSaga from './events/fetchAllEvents.saga';
import fetchEventSaga from './events/fetchEvent.saga';
import updateLessonSaga from './events/updateLesson.saga';
import fetchLocationsSaga from './locations/locations.saga';
import fetchPeopleSaga from './people/people.saga';
import createGeneralNoteSaga from './notes/createGeneralNote.saga';
import updateGeneralNoteSaga from './notes/updateGeneralNote.saga';

export default function* rootSaga() {
  yield all([
    fetchAllEventsSaga(),
    fetchEventSaga(),
    updateLessonSaga(),
    fetchLocationsSaga(),
    fetchPeopleSaga(),
    createGeneralNoteSaga(),
    updateGeneralNoteSaga(),
  ]);
}
