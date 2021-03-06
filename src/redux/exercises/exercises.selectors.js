/* eslint-disable import/prefer-default-export */
import { createSelector } from 'redux-orm';
import orm from '../reduxOrm/orm';
import { dbStateSelector } from '../../services/common.selectors';

export const selectExercisesForDropdown = createSelector(
  orm,
  dbStateSelector,
  session => session.Exercises.all().toModelArray().map(exercise => ({
    value: exercise.exercise_id.toString(), // otherwise we get select/creatable bug
    label: exercise.name,
  })),
);

const getExerciseIdFromProps = (state, props) => Number(props.exerciseId);

export const selectExercise = createSelector(
  orm,
  dbStateSelector,
  getExerciseIdFromProps,
  (session, exerciseId) => {
    const exercise = session.Exercises.withId(exerciseId);
    if (!exercise) return undefined;
    const obj = exercise.ref;

    const teacherWhoCreatedIt = exercise.teacher_who_created_it_id.ref;
    return {
      ...obj,
      teacherWhoCreatedIt,
    };
  },
);
