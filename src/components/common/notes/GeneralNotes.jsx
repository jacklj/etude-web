import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';
import { ItemsOrNotesContainer } from '../styledComponents';

const GeneralNotes = ({ notes }) => (
  <ItemsOrNotesContainer>
    {notes && notes.map(note => (
      <Note
        key={note.note_id}
        note={note.note}
        score={note.score}
        type={note.type}
        note_id={note.note_id}
        eventId={note.event_id}
      />
    ))}
  </ItemsOrNotesContainer>
);

GeneralNotes.defaultProps = {
  notes: undefined,
};

GeneralNotes.propTypes = {
  notes: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

export default GeneralNotes;
