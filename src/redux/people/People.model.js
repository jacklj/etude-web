import { attr, Model } from 'redux-orm';

import { actionTypes as eventsActionTypes } from '../events/events.actions';
import { actionTypes as peopleActionTypes } from './people.actions';
import { actionTypes as repertoireActionTypes } from '../repertoire/repertoire.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class People extends Model {
  static reducer(action, SessionBoundPeople) {
    switch (action.type) {
      case eventsActionTypes.EVENT.GET_ALL.SUCCESS:
      case eventsActionTypes.EVENT.GET.SUCCESS:
      case repertoireActionTypes.UPCOMING_REPERTOIRE.GET.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.people)) {
          Object.values(action.payload.people).forEach(person => SessionBoundPeople.upsert(person));
        }
        break;
      case peopleActionTypes.PEOPLE.GET_ALL.SUCCESS:
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
