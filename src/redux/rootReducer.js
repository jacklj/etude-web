import { combineReducers } from 'redux';
import events from './events/events.reducer';
import locations from './locations/locations.reducer';
import people from './people/people.reducer';
import notes from './notes/notes.reducer';
import db from './reduxOrm/db.reducer';
import items from './items/items.reducer';

export default combineReducers({
  events,
  locations,
  people,
  notes,
  db,
  items,
});
