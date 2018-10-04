import { fk, attr, Model } from 'redux-orm';

import { ACTION_TYPES as eventsActionTypes } from './events.actions';
import { actionTypes as repertoireActionTypes } from '../repertoire/repertoire.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class Events extends Model {
  static reducer(action, SessionBoundEvents) {
    switch (action.type) {
      case eventsActionTypes.EVENT.FETCH_ALL.SUCCESS:
      case eventsActionTypes.EVENT.FETCH.SUCCESS:
      case repertoireActionTypes.UPCOMING_REPERTOIRE.GET.SUCCESS:
        // create or update events in the response payload
        if (ifObjectExistsAndIsNotEmpty(action.payload.events)) {
          Object.values(action.payload.events).forEach(event => SessionBoundEvents.upsert(event));
        }
        break;
      case eventsActionTypes.EVENT.UPDATE.SUCCESS:
      case eventsActionTypes.PRACTICE_SESSION.START.SUCCESS:
      case eventsActionTypes.PRACTICE_SESSION.FINISH.SUCCESS:
        // update any events in the response payload
        if (ifObjectExistsAndIsNotEmpty(action.payload.events)) {
          Object.values(action.payload.events).forEach(event => {
            SessionBoundEvents.withId(event.event_id).update(event);
          });
        }
        break;
      case eventsActionTypes.LESSON.CREATE.SUCCESS:
      case eventsActionTypes.PRACTICE_SESSION.CREATE.SUCCESS:
        // create any events in the response payload
        if (ifObjectExistsAndIsNotEmpty(action.payload.events)) {
          Object.values(action.payload.events).forEach(event => SessionBoundEvents.create(event));
        }
        break;
      case eventsActionTypes.EVENT.DELETE.SUCCESS:
        SessionBoundEvents.withId(action.eventId).delete();
        break;
      default:
        break;
    }
    return undefined; // Return value is ignored.
  }

  toString() {
    return `Event: ${this.start} - ${this.end}`;
  }
}
Events.modelName = 'Events';

Events.fields = {
  event_id: attr(),
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
