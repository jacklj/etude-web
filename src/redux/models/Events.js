import { fk, attr, Model } from 'redux-orm';

import { ACTION_TYPES as eventsActionTypes } from '../events/events.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class Events extends Model {
  static reducer(action, Events, session) {
    switch (action.type) {
      case eventsActionTypes.EVENT.FETCH_ALL.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.events)) {
          Object.values(action.payload.events).forEach(event => Events.create(event));
        }
        break;
      default:
        break;
    }
    // Return value is ignored.
    return undefined;
  }

  toString() {
    return `Event: ${this.start} - ${this.end}`;
  }
  // Declare any static or instance methods you need.
}
Events.modelName = 'Events';

// Declare your related fields.
Events.fields = {
  event_id: attr(), // non-relational field for any value; optional but highly recommended
  start: attr(),
  end: attr(),
  type: attr(),
  rating: attr(),
  in_progress: attr(),
  location_id: fk({ to: 'Locations', relatedName: 'events' }),
  // performances
  performance_id: attr(),
  name: attr(),
  performance_type: attr(),
  details: attr(),
  // lessons or masterclasses
  lesson_id: attr(),
  masterclass_id: attr(),
  teacher_id: fk({ to: 'People', relatedName: 'events' }),
};

Events.options = {
  idAttribute: 'event_id',
};

export default Events;
