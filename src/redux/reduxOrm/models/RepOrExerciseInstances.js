import { fk, attr, Model } from 'redux-orm';

import { ACTION_TYPES as eventsActionTypes } from '../../events/events.actions';
import { ACTION_TYPES as repOrExerciseInstancesActionTypes } from '../../repOrExerciseInstances/repOrExerciseInstances.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../../services/utils';

// pluralised class name so it matches table name in db
class RepOrExerciseInstances extends Model {
  static reducer(action, SessionBoundRepOrExerciseInstances) {
    switch (action.type) {
      case eventsActionTypes.EVENT.FETCH_ALL.SUCCESS:
      case eventsActionTypes.EVENT.FETCH.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.rep_or_exercise_instances)) {
          Object.values(action.payload.rep_or_exercise_instances)
            .forEach(repOrExerciseInstance => SessionBoundRepOrExerciseInstances
              .upsert(repOrExerciseInstance));
        }
        break;
      case repOrExerciseInstancesActionTypes.REP_OR_EXERCISE_INSTANCE.DELETE.SUCCESS: {
        const { repOrExerciseInstanceId } = action;
        SessionBoundRepOrExerciseInstances.withId(repOrExerciseInstanceId).delete();
        break;
      }
      case repOrExerciseInstancesActionTypes.REPERTOIRE_INSTANCE.CREATE.SUCCESS:
      case repOrExerciseInstancesActionTypes.EXERCISE_INSTANCE.CREATE.SUCCESS:
        Object.values(action.payload.rep_or_exercise_instances)
          .forEach(repOrExerciseInstance => SessionBoundRepOrExerciseInstances
            .create(repOrExerciseInstance));
        break;
      default:
        break;
    }
    return undefined; // Return value is ignored.
  }

  toString() {
    return `RepOrExerciseInstance: ${this.rep_or_exercise_instance_id}`;
  }
}

RepOrExerciseInstances.modelName = 'RepOrExerciseInstances';

RepOrExerciseInstances.fields = {
  rep_or_exercise_instance_id: attr(),
  event_id: fk({ to: 'Events', relatedName: 'rep or exercise instances' }),
  repertoire_id: fk({ to: 'Repertoire', relatedName: 'instance' }),
  exercise_id: fk({ to: 'Exercises', relatedName: 'instance' }),

};

RepOrExerciseInstances.options = {
  idAttribute: 'rep_or_exercise_instance_id',
};

export default RepOrExerciseInstances;
