import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';

const GeneralNotes = ({ notes }) => (
  <div>
    <h3>Notes</h3>
    {notes && Object.values(notes).map(note => (
      <Note key={note.note} note={note.note} score={note.score} type={note.type} id={note.id} />
    ))}
  </div>
);

GeneralNotes.defaultProps = {
  notes: undefined,
};

GeneralNotes.propTypes = {
  notes: PropTypes.object,
};

export default GeneralNotes;
