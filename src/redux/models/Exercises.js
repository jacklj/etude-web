import { fk, attr, Model } from 'redux-orm';

import { ACTION_TYPES as eventsActionTypes } from '../events/events.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class Exercises extends Model {
  static reducer(action, Exercises, session) {
    switch (action.type) {
      case eventsActionTypes.EVENT.FETCH_ALL.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.exercises)) {
          Object.values(action.payload.exercises).forEach(exercise => Exercises.create(exercise));
        }
        break;
      default:
        break;
    }
    // Return value is ignored.
    return undefined;
  }

  toString() {
    return `Exercise: ${this.name}`;
  }
  // Declare any static or instance methods you need.
}
Exercises.modelName = 'Exercises';

// Declare your related fields.
Exercises.fields = {
  exercise_id: attr(), // non-relational field for any value; optional but highly recommended
  name: attr(),
  score: attr(),
  range_lowest_note: attr(),
  range_highest_note: attr(),
  details: attr(),
  teacher_who_created_it_id: fk({ to: 'People', relatedName: 'devised_exercises' }),
};

Exercises.options = {
  idAttribute: 'exercise_id',
};

export default Exercises;
