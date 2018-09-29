// selectors.js
import { createSelector } from 'redux-orm';
import orm from '../orm';

const dbStateSelector = state => state.db;

export const selectAllEvents = createSelector(
  orm,
  // The first input selector should always select the db-state.
  // Behind the scenes, `createSelector` begins a Redux-ORM session
  // with the value returned by `dbStateSelector` and passes
  // that Session instance as an argument instead.
  dbStateSelector,
  session => session.Events.all().toModelArray().map(event => {
    // Returns a reference to the raw object in the store,
    // so it doesn't include any reverse or m2m fields.
    const obj = event.ref;

    // resolve foreign keys
    const teacher = event.teacher_id && event.teacher_id.ref;
    const location = event.location_id && event.location_id.ref;
    return {
      ...obj,
      teacher,
      location,
    };
  }),
);

export const anotherSelector = {};
