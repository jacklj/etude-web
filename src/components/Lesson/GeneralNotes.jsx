import React from 'react';
import PropTypes from 'prop-types';

import NoteContainer from './Note';

const GeneralNotes = ({ notes }) => (
  <div>
    {notes
      && Object.values(notes).map(note => (
        <NoteContainer
          key={note.note_id}
          note={note.note}
          score={note.score}
          type={note.type}
          id={note.note_id}
          eventId={note.event_id}
        />
      ))}
  </div>
);

GeneralNotes.defaultProps = {
  notes: undefined,
};

GeneralNotes.propTypes = {
  notes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default GeneralNotes;
