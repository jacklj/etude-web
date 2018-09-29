// selectors.js
import { createSelector } from 'redux-orm';
import orm from '../orm';

const dbStateSelector = state => state.db;

export const selectAllEvents = createSelector(
  orm, // first input for redux-orm selector must be the db state
  dbStateSelector,
  session => session.Events.all().toModelArray().map(event => {
    const obj = event.ref; // reference to raw object in the store

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
