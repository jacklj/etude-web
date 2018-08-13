import { createSelector } from 'reselect';

export const selectAllEvents = state => state.events.events;

export const selectLessons = createSelector(
  selectAllEvents,
  events => events.filter(event => event.type === 'Lesson'),
);

const getEventIdFromProps = (state, props) => {
  console.log('props', props)
  return Number(props.match.params.id);
};

export const selectEvent = createSelector(
  [selectAllEvents, getEventIdFromProps],
  (events, eventId) => {
    console.log(eventId)
    const matchingEventsList = events.filter(event => Number(event.id) === eventId);
    let result;
    if (matchingEventsList === undefined || matchingEventsList.length === 0) {
      result = undefined;
    } else {
      result = matchingEventsList[0]; // eslint-disable-line prefer-destructuring
    }
    console.log('result', result)
    return result;
  },
);
