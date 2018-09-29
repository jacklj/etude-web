import { createSelector } from 'redux-orm';
import orm from '../orm';
import { dbStateSelector } from './common.selectors';


export const selectAllEvents = createSelector(
  orm, // first argument: the ORM
  dbStateSelector, // second argument:the db state selector
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

const getEventIdFromProps = (state, props) => Number(props.match.params.id);

export const selectEvent = createSelector(
  orm,
  dbStateSelector,
  getEventIdFromProps,
  (session, eventId) => {
    const event = session.Events.withId(eventId);
    if (!event) return undefined;
    const obj = event.ref;

    // resolve foreign keys
    // TODO 29th September 2018. Dont resolve teacher and location - instead
    // pass person_id and location_id to the child components, and they can
    // get their details themselves
    const teacher = event.teacher_id && event.teacher_id.ref;
    const location = event.location_id && event.location_id.ref;
    const notes = event.notes.toRefArray();
    return {
      ...obj,
      teacher,
      location,
      notes,
    };
  },
);

export const selectInProgressEvent = createSelector(
  orm,
  dbStateSelector,
  session => {
    const inProgressEvents = session.Events.all().filter(event => event.in_progress);
    if (inProgressEvents.length === 0) return undefined;
    return inProgressEvents[0];
  },
);
