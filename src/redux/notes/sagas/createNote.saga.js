import { call, put, takeLatest } from 'redux-saga/effects';
import { createNote } from '../../../services/api';
import {
  createNoteAndAddToEventSuccess,
  createNoteAndAddToEventFailure,
  createNoteAndAddToRepOrExerciseInstanceSuccess,
  createNoteAndAddToRepOrExerciseInstanceFailure,
  actionTypes,
} from '../notes.actions';

// One saga, rather than 2, to see if it's more readable long term, and also
// because it uses the same endpoint for either type of note, so it felt like there
// would be lots of code reuse
function* createNoteGenerator(action) {
  const { note, type } = action;
  const noteWithId = { ...note };

  const isEventNote = type === actionTypes.NOTE.CREATE_AND_ADD_TO.EVENT.REQUEST;
  const isRepOrExerciseInstanceNote = type
    === actionTypes.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.REQUEST;
  if (isEventNote) {
    const { eventId } = action;
    noteWithId.event_id = eventId;
  } else if (isRepOrExerciseInstanceNote) {
    const { repOrExerciseInstanceId } = action;
    noteWithId.rep_or_exercise_instance_id = repOrExerciseInstanceId;
  } else {
    throw new Error('Trying to create a note without attaching it to an event or repOrExerciseInstance');
  }

  let actionToDispatch;
  try {
    const newNote = yield call(createNote, noteWithId);
    if (isEventNote) {
      actionToDispatch = createNoteAndAddToEventSuccess(newNote);
    } else if (isRepOrExerciseInstanceNote) {
      actionToDispatch = createNoteAndAddToRepOrExerciseInstanceSuccess(newNote);
    }
  } catch (e) {
    if (isEventNote) {
      actionToDispatch = createNoteAndAddToEventFailure(e);
    } else if (isRepOrExerciseInstanceNote) {
      actionToDispatch = createNoteAndAddToRepOrExerciseInstanceFailure(e);
    }
  }
  yield put(actionToDispatch);
}

function* createNoteSaga() {
  yield takeLatest(
    [
      actionTypes.NOTE.CREATE_AND_ADD_TO.EVENT.REQUEST,
      actionTypes.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.REQUEST,
    ],
    createNoteGenerator,
  );
}

export default createNoteSaga;
