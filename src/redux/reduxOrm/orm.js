import { ORM } from 'redux-orm';
import Events from './models/Events.model';
import Locations from './models/Locations.model';
import Notes from './models/Notes.model';
import People from './models/People.model';
import Repertoire from './models/Repertoire.model';
import Exercises from './models/Exercises.model';
import RepOrExerciseInstances from './models/RepOrExerciseInstances.model';
import OtherRepToWorkOn from './models/OtherRepToWorkOn.model';
import PeopleAtEvents from './models/PeopleAtEvents.model';

const orm = new ORM();
orm.register(
  Events,
  Locations,
  Notes,
  People,
  Repertoire,
  Exercises,
  RepOrExerciseInstances,
  OtherRepToWorkOn,
  PeopleAtEvents,
);

export default orm;
