import { all } from 'redux-saga/effects';

import fetchAllEventsSaga from './events/sagas/fetchAllEvents.saga';
import fetchEventSaga from './events/sagas/fetchEvent.saga';
import deleteEventSaga from './events/sagas/deleteEvent.saga';
import updateEventSaga from './events/sagas/updateEvent.saga';
import createLessonSaga from './events/sagas/lesson/createLesson.saga';
import fetchLocationsSaga from './locations/locations.saga';
import fetchPeopleSaga from './people/people.saga';
import createNoteSaga from './notes/sagas/createNote.saga';
import updateNoteSaga from './notes/sagas/updateNote.saga';
import deleteNoteSaga from './notes/sagas/deleteNote.saga';
import fetchRepertoireSaga from './items/sagas/fetchRepertoire.saga';
import fetchExercisesSaga from './items/sagas/fetchExercises.saga';
import createRepertoireInstanceSaga from './items/sagas/createRepertoireInstance.saga';
import createExerciseInstanceSaga from './items/sagas/createExerciseInstance.saga';
import deleteItemSaga from './items/sagas/deleteItem.saga';
import createPracticeSessionSaga from './events/sagas/practice/createPracticeSession.saga';
import startPracticeSessionSaga from './events/sagas/practice/startPracticeSession.saga';
import runPracticeSessionSaga from './events/sagas/practice/runPracticeSession.saga';

export default function* rootSaga() {
  yield all([
    fetchAllEventsSaga(),
    fetchEventSaga(),
    deleteEventSaga(),
    updateEventSaga(),
    createLessonSaga(),
    fetchLocationsSaga(),
    fetchPeopleSaga(),
    createNoteSaga(),
    updateNoteSaga(),
    deleteNoteSaga(),
    fetchRepertoireSaga(),
    fetchExercisesSaga(),
    createRepertoireInstanceSaga(),
    createExerciseInstanceSaga(),
    deleteItemSaga(),
    createPracticeSessionSaga(),
    startPracticeSessionSaga(),
    runPracticeSessionSaga(),
  ]);
}
