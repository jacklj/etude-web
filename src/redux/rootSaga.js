import { all } from 'redux-saga/effects';

import fetchAllEventsSaga from './events/sagas/fetchAllEvents.saga';
import fetchEventSaga from './events/sagas/fetchEvent.saga';
import updateLessonSaga from './events/sagas/updateLesson.saga';
import createLessonSaga from './events/sagas/createLesson.saga';
import fetchLocationsSaga from './locations/locations.saga';
import fetchPeopleSaga from './people/people.saga';
import createGeneralNoteSaga from './notes/sagas/createGeneralNote.saga';
import updateGeneralNoteSaga from './notes/sagas/updateGeneralNote.saga';
import deleteNoteSaga from './notes/sagas/deleteNote.saga';

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
