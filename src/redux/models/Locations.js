import { attr, Model } from 'redux-orm';

import { ACTION_TYPES as eventsActionTypes } from '../events/events.actions';
import { ACTION_TYPES as locationsActionTypes } from '../locations/locations.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class Locations extends Model {
  static reducer(action, Locations, session) {
    switch (action.type) {
      case eventsActionTypes.EVENT.FETCH_ALL.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.locations)) {
          Object.values(action.payload.locations).forEach(location => Locations.create(location));
        }
        break;
      case locationsActionTypes.LOCATIONS_FETCH.SUCCESS:
        Object.values(action.locations).forEach(location => Locations.create(location));
        break;
      default:
        break;
    }
    // Return value is ignored.
    return undefined;
  }

  toString() {
    return `Location: ${this.name}`;
  }
  // Declare any static or instance methods you need.
}
Locations.modelName = 'Locations';

// Declare your related fields.
Locations.fields = {
  location_id: attr(), // non-relational field for any value; optional but highly recommended
  name: attr(),
  address_line_1: attr(),
  address_line_2: attr(),
  address_line_3: attr(),
  town_city: attr(),
  postcode: attr(),
  website: attr(),
};

Locations.options = {
  idAttribute: 'location_id',
};


export default Locations;
