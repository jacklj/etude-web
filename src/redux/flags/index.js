import { combineReducers } from 'redux';
import events from './events.reducer';
import exercises from './exercises.reducer';
import locations from './locations.reducer';
import notes from './notes.reducer';
import people from './people.reducer';
import repertoire from './repertoire.reducer';
import repOrExerciseInstances from './repOrExerciseInstances.reducer';

export default combineReducers({
  events,
  exercises,
  locations,
  notes,
  people,
  repertoire,
  repOrExerciseInstances,
});
