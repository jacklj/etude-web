import { ORM } from 'redux-orm';
import Events from '../events/Events.model';
import Exercises from '../exercises/Exercises.model';
import Locations from '../locations/Locations.model';
import Notes from '../notes/Notes.model';
import People from './models/People.model';
import Repertoire from '../repertoire/Repertoire.model';
import RepOrExerciseInstances from './models/RepOrExerciseInstances.model';
import OtherRepToWorkOn from './models/OtherRepToWorkOn.model';
import PeopleAtEvents from './models/PeopleAtEvents.model';

const orm = new ORM();
orm.register(
  Events,
  Exercises,
  Locations,
  Notes,
  People,
  Repertoire,
  RepOrExerciseInstances,
  OtherRepToWorkOn,
  PeopleAtEvents,
);

export default orm;
