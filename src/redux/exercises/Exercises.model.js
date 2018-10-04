import { fk, attr, Model } from 'redux-orm';

import { actionTypes as exercisesActionTypes } from './exercises.actions';
import { actionTypes as eventsActionTypes } from '../events/events.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class Exercises extends Model {
  static reducer(action, SessionBoundExercises) {
    switch (action.type) {
      case eventsActionTypes.EVENT.GET_ALL.SUCCESS:
      case eventsActionTypes.EVENT.GET.SUCCESS:
      case exercisesActionTypes.EXERCISES.GET_ALL.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.exercises)) {
          Object.values(action.payload.exercises)
            .forEach(exercise => SessionBoundExercises.upsert(exercise));
        }
        break;
      default:
        break;
    }
    return undefined; // Return value is ignored.
  }

  toString() {
    return `Exercise: ${this.name}`;
  }
}

Exercises.modelName = 'Exercises';

Exercises.fields = {
  exercise_id: attr(),
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
