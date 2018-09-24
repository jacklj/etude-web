import { fk, attr, Model } from 'redux-orm';

class Event extends Model {
  toString() {
    return `Event: ${this.start}`;
  }
  // Declare any static or instance methods you need.
}
Event.modelName = 'Event';

// Declare your related fields.
Event.fields = {
  id: attr(), // non-relational field for any value; optional but highly recommended
  start: attr(),
  end: attr(),
  type: attr(),
  rating: attr(),
  in_progress: attr(),
  location_id: fk({ to: 'Location', relatedName: 'events' }),
};

export default Event;
