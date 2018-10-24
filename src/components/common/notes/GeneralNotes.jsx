import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';
import { ItemsOrNotesContainer } from '../styledComponents';

const GeneralNotes = ({ notes, editable }) => (
  <ItemsOrNotesContainer>
    {notes && notes.map(note => (
      <Note
        key={note.note_id}
        note={note.note}
        score={note.score}
        type={note.type}
        noteId={note.note_id}
        editable={editable}
      />
    ))}
  </ItemsOrNotesContainer>
);

GeneralNotes.defaultProps = {
  notes: undefined,
  editable: true,
};

GeneralNotes.propTypes = {
  notes: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  editable: PropTypes.bool,
};

export default GeneralNotes;
