import { fk, attr, Model } from 'redux-orm';

import { ACTION_TYPES as eventsActionTypes } from '../events/events.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

// pluralised class name so it matches table name in db
class PeopleAtEvents extends Model {
  static reducer(action, PeopleAtEvents, session) {
    switch (action.type) {
      case eventsActionTypes.EVENT.FETCH_ALL.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.people_at_events)) {
          Object.values(action.payload.people_at_events)
            .forEach(personAtEvent => PeopleAtEvents.create(personAtEvent));
        }
        break;
      default:
        break;
    }
    // Return value is ignored.
    return undefined;
  }

  toString() {
    return `Person at event: ${this.person_at_event_id}`;
  }
  // Declare any static or instance methods you need.
}
PeopleAtEvents.modelName = 'PeopleAtEvents';

// Declare your related fields.
PeopleAtEvents.fields = {
  person_at_event_id: attr(),
  event_id: fk({ to: 'Events', relatedName: 'people at events' }),
  person_id: fk({ to: 'People', relatedName: 'people at events' }),

};

PeopleAtEvents.options = {
  idAttribute: 'person_at_event_id',
};

export default PeopleAtEvents;
