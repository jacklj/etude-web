/* eslint-disable import/prefer-default-export */
import { createSelector } from 'redux-orm';
import orm from '../orm';
import { dbStateSelector } from './common.selectors';

export const selectExercisesForDropdown = createSelector(
  orm,
  dbStateSelector,
  session => session.Exercises.all().toModelArray().map(exercise => ({
    value: exercise.exercise_id,
    label: exercise.name,
  })),
);
