import moment from 'moment';

export const renderDuration = (startDateTime, endDateTime) => {
  const start = moment(startDateTime);
  let startEndRender;

  if (!endDateTime) {
    startEndRender = `${start.format('H:mm dddd Do MMMM YYYY')} - in progress`;
  } else {
    const end = moment(endDateTime);
    if (start.isSame(end, 'day')) {
      startEndRender = `${start.format('H:mm')} - ${end.format('H:mm')} ${start.format(
        'dddd Do MMMM YYYY',
      )}`;
    } else if (start.isSame(end, 'month')) {
      startEndRender = `${start.format('H:mm dddd Do')} - ${end.format('H:mm dddd Do MMMM YYYY')}`;
    } else if (start.isSame(end, 'year')) {
      startEndRender = `${start.format('H:mm dddd Do MMMM')} - ${end.format(
        'H:mm dddd Do MMMM YYYY',
      )}`;
    } else {
      startEndRender = `${start.format('H:mm dddd Do MMMM YYYY')} - ${end.format(
        'H:mm dddd Do MMMM YYYY',
      )}`;
    }
  }
  return startEndRender;
};

export const sortEventsReverseChronological = events => {
  if (!Array.isArray(events)) return [];
  return events.sort((a, b) => {
    if (moment(a.end).isBefore(moment(b.end))) {
      return 1;
    } if (moment(a.end).isAfter(moment(b.end))) {
      return -1;
    }
    return 0; // leave order as is
  });
};

export const toHHMMSS = (timeInSeconds) => {
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
  let seconds = timeInSeconds - (hours * 3600) - (minutes * 60);

  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }
  if (seconds < 10) { seconds = `0${seconds}`; }
  return `${hours}:${minutes}:${seconds}`;
};
