import { ORM } from 'redux-orm';
import Events from './Events';
import Locations from './Locations';
import Notes from './Notes';
import People from './People';
import Repertoire from './Repertoire';
import Exercises from './Exercises';
import RepOrExerciseInstances from './RepOrExerciseInstances';
import PeopleAtEvents from './PeopleAtEvents';

const orm = new ORM();
orm.register(
  Events,
  Locations,
  Notes,
  People,
  Repertoire,
  Exercises,
  RepOrExerciseInstances,
  PeopleAtEvents,
);

export default orm;
