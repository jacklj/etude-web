import { fk, attr, Model } from 'redux-orm';

import { ACTION_TYPES } from '../notes/notes.actions';

class Note extends Model {
  static reducer(action, Note, session) {
    switch (action.type) {
      case ACTION_TYPES.NOTE.CREATE_AND_ADD_TO.EVENT.SUCCESS:
        Note.create(action.note);
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
Note.modelName = 'Note';

// Declare your related fields.
Note.fields = {
  note_id: attr(), // non-relational field for any value; optional but highly recommended
  note: attr(),
  score: attr(),
  type: attr(),
  event_id: fk({ to: 'Event', relatedName: 'notes' }),
};

Note.options = {
  idAttribute: 'note_id',
};

export default Note;
