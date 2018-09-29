import { attr, Model } from 'redux-orm';

import { ACTION_TYPES as eventsActionTypes } from '../events/events.actions';
import { ACTION_TYPES as locationsActionTypes } from '../locations/locations.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class Locations extends Model {
  static reducer(action, SessionBoundLocations) {
    switch (action.type) {
      case eventsActionTypes.EVENT.FETCH_ALL.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.locations)) {
          Object.values(action.payload.locations)
            .forEach(location => SessionBoundLocations.create(location));
        }
        break;
      case locationsActionTypes.LOCATIONS_FETCH.SUCCESS:
        Object.values(action.locations).forEach(location => Locations.create(location));
        break;
      default:
        break;
    }
    return undefined; // Return value is ignored.
  }

  toString() {
    return `Location: ${this.name}`;
  }
}

Locations.modelName = 'Locations';

Locations.fields = {
  location_id: attr(),
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
