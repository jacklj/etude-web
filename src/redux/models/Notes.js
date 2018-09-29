import { fk, attr, Model } from 'redux-orm';

import { ACTION_TYPES as notesActionTypes } from '../notes/notes.actions';
import { ACTION_TYPES as eventsActionTypes } from '../events/events.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class Notes extends Model {
  static reducer(action, SessionBoundNotes) {
    switch (action.type) {
      case eventsActionTypes.EVENT.FETCH_ALL.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.notes)) {
          Object.values(action.payload.notes)
            .forEach(note => SessionBoundNotes.create(note));
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
    return undefined; // Return value is ignored.
  }

  toString() {
    return `Note: ${this.note}`;
  }
}

Notes.modelName = 'Notes';

Notes.fields = {
  note_id: attr(),
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
