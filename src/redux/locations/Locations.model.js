import { attr, Model } from 'redux-orm';

import { actionTypes as eventsActionTypes } from '../events/events.actions';
import { actionTypes as locationsActionTypes } from './locations.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class Locations extends Model {
  static reducer(action, SessionBoundLocations) {
    switch (action.type) {
      case eventsActionTypes.EVENT.GET_ALL.SUCCESS:
      case eventsActionTypes.EVENT.GET.SUCCESS:
      case locationsActionTypes.LOCATIONS.GET_ALL.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.locations)) {
          Object.values(action.payload.locations)
            .forEach(location => SessionBoundLocations.upsert(location));
        }
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
