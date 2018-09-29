import { combineReducers } from 'redux';
import events from './events/events.reducer';
import locations from './locations/locations.reducer';
import people from './people/people.reducer';
import notes from './notes/notes.reducer';
import db from './reduxOrm/db.reducer';
import repOrExerciseInstances from './repOrExerciseInstances/repOrExerciseInstances.reducer';

export default combineReducers({
  events,
  locations,
  people,
  notes,
  db,
  repOrExerciseInstances,
});
