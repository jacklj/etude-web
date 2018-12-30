import { createSelector } from 'redux-orm';
import { createSelector as createReselectSelector } from 'reselect';
import moment from 'moment';

import orm from '../reduxOrm/orm';
import { dbStateSelector } from '../../services/common.selectors';
import { EVENT_TYPES } from '../../services/constants';

const isArrayEmpty = array => array === undefined || array.length === 0;

export const selectAllEvents = createSelector(
  orm, // first argument: the ORM
  dbStateSelector, // second argument:the db state selector
  session => session.Events.all()
    .toModelArray()
    .map(event => {
      const obj = event.ref; // reference to raw object in the store
      // resolve foreign keys
      const teacher = event.teacher_id && event.teacher_id.ref;
      const location = event.location_id && event.location_id.ref;
      const notes = event.notes.toRefArray();
      const { repOrExerciseInstances } = event;

      const exercises = [];
      const pieces = [];
      repOrExerciseInstances.all().toModelArray().forEach(roei => {
        if (roei.exercise_id) {
          const exercise = roei.exercise_id.ref;
          exercises.push(exercise);
        } else if (roei.repertoire_id) {
          const piece = roei.repertoire_id.ref;
          pieces.push(piece);
        } else {
          throw new Error("Invalid ")
        }
      });
      return {
        ...obj,
        teacher,
        location,
        exercises,
        pieces,
        notes,
      };
    }),
);

export const selectNextThreeEvents = createSelector(
  orm, // first argument: the ORM
  dbStateSelector, // second argument:the db state selector
  session => {
    const events = session.Events.all().toModelArray();
    const upcomingEvents = events.filter(event => moment().isBefore(event.start));
    const sortByDate = upcomingEvents.sort((a, b) => moment(a.start).isAfter(b.start));
    const nextThreeEvents = sortByDate.slice(0, 3);
    const eventsWithExpandedReferences = nextThreeEvents.map(event => {
      const obj = event.ref; // reference to raw object in the store
      // resolve foreign keys
      const teacher = event.teacher_id && event.teacher_id.ref;
      const location = event.location_id && event.location_id.ref;
      const notes = event.notes.toRefArray();
      const { repOrExerciseInstances } = event;

      const exercises = [];
      const pieces = [];
      repOrExerciseInstances.all().toModelArray().forEach(roei => {
        if (roei.exercise_id) {
          const exercise = roei.exercise_id.ref;
          exercises.push(exercise);
        } else if (roei.repertoire_id) {
          const piece = roei.repertoire_id.ref;
          pieces.push(piece);
        } else {
          throw new Error("Invalid ")
        }
      });
      return {
        ...obj,
        teacher,
        location,
        exercises,
        pieces,
        notes,
      };
    });
    return eventsWithExpandedReferences;
  },
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
    const repOrExerciseInstances = event.repOrExerciseInstances.toRefArray();
    return {
      ...obj,
      teacher,
      location,
      notes,
      repOrExerciseInstances,
    };
  },
);

export const selectInProgressEvent = createSelector(orm, dbStateSelector, session => {
  const inProgressEvents = session.Events.all()
    .filter(event => event.in_progress)
    .toRefArray();
  if (inProgressEvents.length === 0) return undefined;
  return inProgressEvents[0];
});

function getMostRecentEvent(events) {
  let mostRecentEvent = events[0];
  events.forEach(event => {
    if (moment(event.ref.start).isAfter(mostRecentEvent.ref.start)) {
      mostRecentEvent = event;
    }
  });
  return mostRecentEvent;
}

const selectAllLessons = createSelector(orm, dbStateSelector, session => session.Events.all()
  .filter(event => event.type === EVENT_TYPES.LESSON)
  .toModelArray());

export const selectLastLesson = createReselectSelector(selectAllLessons, allLessons => {
  if (!allLessons || allLessons.length === 0) return undefined;

  const mostRecentLesson = getMostRecentEvent(allLessons);
  const obj = mostRecentLesson.ref;
  const notes = mostRecentLesson.notes && mostRecentLesson.notes.toRefArray();
  return {
    ...obj,
    notes,
  };
});

const selectAllPracticeSessions = createSelector(
  orm,
  dbStateSelector,
  session => session.Events.all()
    .filter(event => event.type === EVENT_TYPES.PRACTICE)
    .toModelArray(),
);

export const selectThreeRecentPracticeSessionsWithNotes = createReselectSelector(
  selectAllPracticeSessions,
  allPracticeSessions => {
    const withNotes = allPracticeSessions.filter(
      practiceSession => !isArrayEmpty(practiceSession.notes.toRefArray()),
    );
    const sortByDate = withNotes.sort((a, b) => moment(a.start).isAfter(b.start));
    const threeMostRecent = sortByDate.slice(0, 3);
    const practiceSessionObjectsWithNotes = threeMostRecent.map(practiceSession => {
      const obj = practiceSession.ref;
      const notes = practiceSession.notes.toRefArray();
      return {
        ...obj,
        notes,
      };
    });
    return practiceSessionObjectsWithNotes;
  },
);

const selectPracticeSessionsInTheLast7Days = createReselectSelector(
  selectAllPracticeSessions,
  allPracticeSessions => {
    const sevenDaysAgo = moment()
      .subtract(7, 'days')
      .startOf('day');
    return allPracticeSessions.filter(
      practiceSession => practiceSession.end && moment(practiceSession.end).isAfter(sevenDaysAgo),
    );
  },
);

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const daysOfTheWeekForLast7Days = () => {
  const todayAsNumber = moment().weekday(); // Mon is 0, Tue is 1 etc
  const oneWeekAgoTillSunday = daysOfWeek.slice(todayAsNumber + 1);
  const mondayToToday = daysOfWeek.slice(0, todayAsNumber + 1);
  return [...oneWeekAgoTillSunday, ...mondayToToday];
};

const calculatePracticeTimesPerDayForLast7Days = createReselectSelector(
  selectPracticeSessionsInTheLast7Days,
  practiceSessionsInTheLast7Days => {
    const today = moment();
    const results = [0, 0, 0, 0, 0, 0, 0];
    practiceSessionsInTheLast7Days.forEach(practiceSession => {
      const start = moment(practiceSession.start);
      const end = moment(practiceSession.end);
      const durationInMinutes = end.diff(start, 'minutes');
      // counts the day on which the practice session is started as the session's date
      // convert to start of 'start' datetime so that if it was yesterday, there's
      // a diff of at least 24h
      const differenceFromTodayInDays = today.diff(start.startOf('day'), 'days');
      results[6 - differenceFromTodayInDays] += durationInMinutes;
    });
    return results;
  },
);

export const calculateGraphData = createReselectSelector(
  calculatePracticeTimesPerDayForLast7Days,
  practiceTimesPerDayForLast7Days => {
    const dayNames = daysOfTheWeekForLast7Days();
    const results = practiceTimesPerDayForLast7Days.map((practiceTime, key) => ({
      name: dayNames[key],
      'Practice Time': practiceTime,
    }));
    return results;
  },
);
