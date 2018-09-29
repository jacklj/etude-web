import { fk, attr, Model } from 'redux-orm';

import { ACTION_TYPES as notesActionTypes } from '../notes/notes.actions';
import { ACTION_TYPES as eventsActionTypes } from '../events/events.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class Notes extends Model {
  static reducer(action, Notes, session) {
    switch (action.type) {
      case eventsActionTypes.EVENT.FETCH_ALL.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.notes)) {
          Object.values(action.payload.notes).forEach(note => Notes.create(note));
        }
        break;
      case notesActionTypes.NOTE.CREATE_AND_ADD_TO.EVENT.SUCCESS:
        Notes.create(action.note);
        break;
      case notesActionTypes.NOTE.UPDATE.SUCCESS:
        Notes.withId(action.note.note_id).update(action.note);
        break;
      case notesActionTypes.NOTE.DELETE.SUCCESS:
        Notes.withId(action.note.note_id).delete();
        break;
      default:
        break;
    }
    // Return value is ignored.
    return undefined;
  }

  toString() {
    return `Note: ${this.note}`;
  }
  // Declare any static or instance methods you need.
}
Notes.modelName = 'Notes';

// Declare your related fields.
Notes.fields = {
  note_id: attr(), // non-relational field for any value; optional but highly recommended
  note: attr(),
  score: attr(),
  type: attr(),
  rep_or_exercise_instance_id: fk({ to: 'RepOrExerciseInstances', relatedName: 'notes' }),
  event_id: fk({ to: 'Events', relatedName: 'notes' }),
};

Notes.options = {
  idAttribute: 'note_id',
};

export default Notes;
