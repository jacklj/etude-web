import { createSelector } from 'reselect';

const selectAllEventsAsObject = state => state.events.events;

export const selectAllEventsAsArray = createSelector(
  selectAllEventsAsObject,
  allEventsObject => Object.values(allEventsObject),
);

export const selectLessons = createSelector(
  selectAllEventsAsArray,
  events => events.filter(event => event.type === 'Lesson'),
);

const getEventIdFromProps = (state, props) => Number(props.match.params.id);

export const selectEvent = createSelector(
  [selectAllEventsAsObject, getEventIdFromProps],
  (events, eventId) => events[eventId],
);

export const selectInProgressEvent = createSelector(
  selectAllEventsAsArray,
  events => {
    const inProgressEvents = events.filter(event => event.in_progress);
    if (inProgressEvents.length === 0) return undefined;
    return inProgressEvents[0];
  },
);
