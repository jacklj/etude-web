import { combineReducers } from 'redux';
import practiceSessionTimer from './events/practiceSessionTimer.reducer';
import db from './reduxOrm/db.reducer';
import flags from './flags/flags.reducer';

export default combineReducers({
  practiceSessionTimer,
  db,
  flags,
});
