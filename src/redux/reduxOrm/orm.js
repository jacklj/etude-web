import { ORM } from 'redux-orm';
import Events from './models/Events';
import Locations from './models/Locations';
import Notes from './models/Notes';
import People from './models/People';
import Repertoire from './models/Repertoire';
import Exercises from './models/Exercises';
import RepOrExerciseInstances from './models/RepOrExerciseInstances';
import OtherRepToWorkOn from './models/OtherRepToWorkOn';
import PeopleAtEvents from './models/PeopleAtEvents';

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
