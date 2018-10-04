import { fk, attr, Model } from 'redux-orm';

import { actionTypes as eventsActionTypes } from '../events/events.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

// pluralised class name so it matches table name in db
class PeopleAtEvents extends Model {
  static reducer(action, SessionBoundPeopleAtEvents) {
    switch (action.type) {
      case eventsActionTypes.EVENT.GET_ALL.SUCCESS:
      case eventsActionTypes.EVENT.GET.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.people_at_events)) {
          Object.values(action.payload.people_at_events)
            .forEach(personAtEvent => SessionBoundPeopleAtEvents.upsert(personAtEvent));
        }
        break;
      default:
        break;
    }
    return undefined; // Return value is ignored.
  }

  toString() {
    return `Person at event: ${this.person_at_event_id}`;
  }
}

PeopleAtEvents.modelName = 'PeopleAtEvents';

PeopleAtEvents.fields = {
  person_at_event_id: attr(),
  event_id: fk({ to: 'Events', relatedName: 'people at events' }),
  person_id: fk({ to: 'People', relatedName: 'people at events' }),

};

PeopleAtEvents.options = {
  idAttribute: 'person_at_event_id',
};

export default PeopleAtEvents;
