import { combineReducers } from 'redux';
import events from './events/events.reducer';
import people from './people/people.reducer';
import notes from './notes/notes.reducer';
import db from './reduxOrm/db.reducer';
import repOrExerciseInstances from './repOrExerciseInstances/repOrExerciseInstances.reducer';
import flags from './flags/flags.reducer';

export default combineReducers({
  events,
  people,
  notes,
  db,
  repOrExerciseInstances,
  flags,
});
