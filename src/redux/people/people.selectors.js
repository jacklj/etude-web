/* eslint-disable import/prefer-default-export */
import { createSelector } from 'redux-orm';
import orm from '../reduxOrm/orm';
import { dbStateSelector } from '../../services/common.selectors';

export const selectTeachersForDropdown = createSelector(
  orm,
  dbStateSelector,
  session => session.People.all()
    .filter(person => person.role === 'Teacher')
    .toModelArray().map(teacher => ({
      value: teacher.person_id,
      label: `${teacher.first_name} ${teacher.surname}`,
    })),
);

export const selectComposersForDropdown = createSelector(
  orm,
  dbStateSelector,
  session => session.People.all()
    .filter(person => person.role === 'Composer')
    .toModelArray().map(composer => ({
      value: composer.person_id,
      label: `${composer.surname}, ${composer.first_name}`,
    })),
);
