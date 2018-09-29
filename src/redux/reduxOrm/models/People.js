import { attr, Model } from 'redux-orm';

import { ACTION_TYPES as eventsActionTypes } from '../../events/events.actions';
import { ACTION_TYPES as peopleActionTypes } from '../../people/people.actions';

import { ifObjectExistsAndIsNotEmpty } from '../../../services/utils';

class People extends Model {
  static reducer(action, SessionBoundPeople) {
    switch (action.type) {
      case eventsActionTypes.EVENT.FETCH_ALL.SUCCESS:
      case eventsActionTypes.EVENT.FETCH.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.people)) {
          Object.values(action.payload.people).forEach(person => SessionBoundPeople.upsert(person));
        }
        break;
      case peopleActionTypes.PEOPLE.FETCH.SUCCESS:
        Object.values(action.payload.people).forEach(person => SessionBoundPeople.upsert(person));
        break;
      default:
        break;
    }
    return undefined; // Return value is ignored.
  }

  toString() {
    return `Person: ${this.first_name} ${this.surname}`;
  }
}

People.modelName = 'People';

People.fields = {
  person_id: attr(),
  first_name: attr(),
  surname: attr(),
  role: attr(),
};

People.options = {
  idAttribute: 'person_id',
};

export default People;
