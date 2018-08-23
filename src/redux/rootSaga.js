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
import fetchRepertoireSaga from './items/sagas/fetchRepertoire.saga';
import fetchExercisesSaga from './items/sagas/fetchExercises.saga';
import createRepertoireInstanceSaga from './items/sagas/createRepertoireInstance.saga';
import createExerciseInstanceSaga from './items/sagas/createExerciseInstance.saga';
import deleteItemSaga from './items/sagas/deleteItem.saga';
import createPracticeSessionSaga from './events/sagas/createPracticeSession.saga';

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
    fetchRepertoireSaga(),
    fetchExercisesSaga(),
    createRepertoireInstanceSaga(),
    createExerciseInstanceSaga(),
    deleteItemSaga(),
    createPracticeSessionSaga(),
  ]);
}
