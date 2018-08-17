import { createSelector } from 'reselect';

const selectRepertoire = state => state.items.repertoire;
const selectExercises = state => state.items.exercises;

export const selectRepertoireForDropdown = createSelector(
  selectRepertoire,
  repertoire => Object.values(repertoire).map(piece => ({
    value: piece.id,
    label: `${piece.name} - ${piece.composer.surname}`,
  })),
);

export const selectExercisesForDropdown = createSelector(
  selectExercises,
  exercises => Object.values(exercises).map(exercise => ({
    value: exercise.id,
    label: exercise.name,
  })),
);
