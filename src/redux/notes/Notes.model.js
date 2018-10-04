import { fk, attr, Model } from 'redux-orm';

import { actionTypes as notesActionTypes } from './notes.actions';
import { ACTION_TYPES as eventsActionTypes } from '../events/events.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class Notes extends Model {
  static reducer(action, SessionBoundNotes) {
    switch (action.type) {
      case eventsActionTypes.EVENT.FETCH_ALL.SUCCESS:
      case eventsActionTypes.EVENT.FETCH.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.notes)) {
          Object.values(action.payload.notes)
            .forEach(note => SessionBoundNotes.upsert(note));
        }
        break;
      case notesActionTypes.NOTE.CREATE_AND_ADD_TO.EVENT.SUCCESS:
      case notesActionTypes.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.SUCCESS:
        Object.values(action.payload.notes)
          .forEach(note => SessionBoundNotes.create(note));
        break;
      case notesActionTypes.NOTE.UPDATE.SUCCESS:
        Object.values(action.payload.notes)
          .forEach(note => SessionBoundNotes.withId(note.note_id).update(note));
        break;
      case notesActionTypes.NOTE.DELETE.SUCCESS:
        SessionBoundNotes.withId(action.noteId).delete();
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
