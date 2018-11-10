import { createSelector } from 'redux-orm';

import orm from '../reduxOrm/orm';
import { dbStateSelector } from '../../services/common.selectors';

const getRepOrExerciseInstanceIdFromProps = (state, props) => Number(props.repOrExerciseInstanceId);

export const selectNotesIdsForRepOrExerciseItem = createSelector(
  orm,
  dbStateSelector,
  getRepOrExerciseInstanceIdFromProps,
  (session, repOrExerciseInstanceId) => session.Notes
    .all()
    .toModelArray()
    .filter(note => note.ref.rep_or_exercise_instance_id === repOrExerciseInstanceId)
    .map(note => note.ref.note_id),
);

const getNoteIdFromProps = (state, props) => Number(props.noteId);

export const selectNoteById = createSelector(
  orm,
  dbStateSelector,
  getNoteIdFromProps,
  (session, noteId) => session.Notes.all()
    .toRefArray()
    .filter(note => note.note_id === noteId)[0],
);
