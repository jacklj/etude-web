import { all } from 'redux-saga/effects';

import getAllEventsSaga from './events/sagas/getAllEvents.saga';
import getEventSaga from './events/sagas/getEvent.saga';
import deleteEventSaga from './events/sagas/deleteEvent.saga';
import updateEventSaga from './events/sagas/updateEvent.saga';
import createLessonSaga from './events/sagas/lesson/createLesson.saga';
import fetchLocationsSaga from './locations/locations.saga';
import fetchPeopleSaga from './people/people.saga';
import createNoteSaga from './notes/sagas/createNote.saga';
import updateNoteSaga from './notes/sagas/updateNote.saga';
import deleteNoteSaga from './notes/sagas/deleteNote.saga';
import fetchRepertoireSaga from './repOrExerciseInstances/sagas/fetchRepertoire.saga';
import fetchExercisesSaga from './repOrExerciseInstances/sagas/fetchExercises.saga';
import createRepertoireInstanceSaga from './repOrExerciseInstances/sagas/createRepertoireInstance.saga';
import createExerciseInstanceSaga from './repOrExerciseInstances/sagas/createExerciseInstance.saga';
import deleteRepOrExerciseInstanceSaga from './repOrExerciseInstances/sagas/deleteRepOrExerciseInstance.saga';
import createPracticeSessionSaga from './events/sagas/practice/createPracticeSession.saga';
import startPracticeSessionSaga from './events/sagas/practice/startPracticeSession.saga';
import runPracticeSessionSaga from './events/sagas/practice/runPracticeSession.saga';
import getUpcomingRepSaga from './repertoire/getUpcomingRep.saga';

export default function* rootSaga() {
  yield all([
    getAllEventsSaga(),
    getEventSaga(),
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
    deleteRepOrExerciseInstanceSaga(),
    createPracticeSessionSaga(),
    startPracticeSessionSaga(),
    runPracticeSessionSaga(),
    getUpcomingRepSaga(),
  ]);
}
