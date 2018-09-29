import { fk, attr, Model } from 'redux-orm';

import { ACTION_TYPES as eventsActionTypes } from '../events/events.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class People extends Model {
  static reducer(action, People, session) {
    switch (action.type) {
      case eventsActionTypes.EVENT.FETCH_ALL.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.people)) {
          Object.values(action.payload.people).forEach(person => People.create(person));
        }
        break;
      default:
        break;
    }
    // Return value is ignored.
    return undefined;
  }

  toString() {
    return `Person: ${this.first_name} ${this.surname}`;
  }
  // Declare any static or instance methods you need.
}
People.modelName = 'People';

// Declare your related fields.
People.fields = {
  person_id: attr(), // non-relational field for any value; optional but highly recommended
  first_name: attr(),
  surname: attr(),
  role: attr(),
};

People.options = {
  idAttribute: 'person_id',
};

export default People;
