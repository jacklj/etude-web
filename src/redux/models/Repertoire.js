import { fk, attr, Model } from 'redux-orm';

import { ACTION_TYPES as eventsActionTypes } from '../events/events.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class Repertoire extends Model {
  static reducer(action, Repertoire, session) {
    switch (action.type) {
      case eventsActionTypes.EVENT.FETCH_ALL.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.repertoire)) {
          Object.values(action.payload.repertoire).forEach(repertoireItem => Repertoire.create(repertoireItem));
        }
        break;
      default:
        break;
    }
    // Return value is ignored.
    return undefined;
  }

  toString() {
    return `Repertoire: ${this.name}`;
  }
  // Declare any static or instance methods you need.
}
Repertoire.modelName = 'Repertoire';

// Declare your related fields.
Repertoire.fields = {
  repertoire_id: attr(), // non-relational field for any value; optional but highly recommended
  name: attr(),
  composer_id: fk({ to: 'People', relatedName: 'compositions' }),
  composition_date: attr(),
  larger_work: attr(),
  character_that_sings_it: attr(),
};

Repertoire.options = {
  idAttribute: 'repertoire_id',
};

export default Repertoire;
