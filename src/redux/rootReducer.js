import { combineReducers } from 'redux';
import events from './events/events.reducer';
import locations from './locations/locations.reducer';
import people from './people/people.reducer';

export default combineReducers({
  events,
  locations,
  people,
});
