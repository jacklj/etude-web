import moment from 'moment';

export const renderDuration = (startDateTime, endDateTime) => {
  const start = moment(startDateTime);
  const end = moment(endDateTime);

  let startEndRender;
  if (start.isSame(end, 'day')) {
    startEndRender = `${start.format('H:mm')} - ${end.format('H:mm')} ${start.format('dddd Do MMMM YYYY')}`;
  } else {
    if (start.isSame(end, 'month')) {
      startEndRender = `${start.format('H:mm dddd Do')} - ${end.format('H:mm dddd Do MMMM YYYY')}`;
    } else {
      if (start.isSame(end, 'year')) {
        startEndRender = `${start.format('H:mm dddd Do MMMM')} - ${end.format('H:mm dddd Do MMMM YYYY')}`;
      } else {
        startEndRender = `${start.format('H:mm dddd Do MMMM YYYY')} - ${end.format('H:mm dddd Do MMMM YYYY')}`;
      }
    }
  }
  return startEndRender;
};

export const sortEventsReverseChronological = (events) => events.sort((a,b) => {
  if(moment(a.end).isBefore(moment(b.end))) {
    return 1;
  } else if (moment(a.end).isAfter(moment(b.end))) {
    return -1;
  } else {
    return 0; // leave order as is
  }
});
