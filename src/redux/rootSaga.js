import { all } from 'redux-saga/effects';

import fetchAllEventsSaga from './events/fetchAllEvents.saga';
import fetchEventSaga from './events/fetchEvent.saga';
import updateLessonSaga from './events/updateLesson.saga';
import createLessonSaga from './events/createLesson.saga';
import fetchLocationsSaga from './locations/locations.saga';
import fetchPeopleSaga from './people/people.saga';
import createGeneralNoteSaga from './notes/createGeneralNote.saga';
import updateGeneralNoteSaga from './notes/updateGeneralNote.saga';
import deleteNoteSaga from './notes/deleteNote.saga';

export default function* rootSaga() {
  yield all([
    fetchAllEventsSaga(),
    fetchEventSaga(),
    updateLessonSaga(),
    createLessonSaga(),
    fetchLocationsSaga(),
    fetchPeopleSaga(),
    createGeneralNoteSaga(),
    updateGeneralNoteSaga(),
    deleteNoteSaga(),
  ]);
}
