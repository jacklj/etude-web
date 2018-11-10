import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NoteById from './NoteById';
import { ItemsOrNotesContainer } from '../styledComponents';
import { selectNotesIdsForRepOrExerciseItem } from '../../../redux/notes/notes.selectors';

const RepOrExerciseInstanceNotes = ({ editable, notesIds }) => (
  <ItemsOrNotesContainer>
    {notesIds && notesIds.map(noteId => (
      <NoteById
        key={noteId}
        noteId={noteId}
        editable={editable}
      />
    ))}
  </ItemsOrNotesContainer>
);

RepOrExerciseInstanceNotes.defaultProps = {
  editable: true,
};

RepOrExerciseInstanceNotes.propTypes = {
  notesIds: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  editable: PropTypes.bool,
  // repOrExerciseInstanceId is used in the selector below
  // eslint-disable-next-line react/no-unused-prop-types
  repOrExerciseInstanceId: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  notesIds: selectNotesIdsForRepOrExerciseItem(state, ownProps),
});

export default connect(mapStateToProps)(RepOrExerciseInstanceNotes);
