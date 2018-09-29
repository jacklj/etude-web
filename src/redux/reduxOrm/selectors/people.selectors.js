/* eslint-disable import/prefer-default-export */
import { createSelector } from 'redux-orm';
import orm from '../orm';
import { dbStateSelector } from './common.selectors';

export const selectTeachersForDropdown = createSelector(
  orm,
  dbStateSelector,
  session => session.People.all()
    .filter(person => person.role === 'Teacher')
    .toModelArray().map(teacher => ({
      value: teacher.id,
      label: `${teacher.first_name} ${teacher.surname}`,
    })),
);
