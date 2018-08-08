import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../common/itemCards';

const GeneralNotes = ({ notes }) => (
  <div>
    <h3>Notes</h3>
    {notes && Array.isArray(notes) && notes.map(note => (
      <Card key={`${note}`}>
        <div>{note.note}</div>
        <div>{note.score}</div>
        <div>{note.type}</div>
      </Card>
    ))}
  </div>
);

GeneralNotes.defaultProps = {
  notes: undefined,
};

GeneralNotes.propTypes = {
  notes: PropTypes.array,
};

export default GeneralNotes;
