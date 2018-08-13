/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectPeople = state => state.people.people;

const selectTeachers = createSelector(
  selectPeople,
  people => people.filter(person => person.role === 'Teacher'),
);

export const selectTeachersForDropdown = createSelector(
  selectTeachers,
  teachers => teachers.map(teacher => ({
    value: teacher.id,
    label: `${teacher.first_name} ${teacher.surname}`,
  })),
);
