import { sortEventsReverseChronological } from './datetime';

const env = process.env.NODE_ENV || 'development';

const baseURL = env === 'development' ? 'http://localhost:8080' : 'http://singprocess.herokuapp.com';

export const getTimeline = () => fetch(`${baseURL}/api/events`)
  .then(response => response.json())
  .then(timeline => sortEventsReverseChronological(timeline));

export const getUpcomingRepertoire = () => fetch(`${baseURL}/api/repertoire/upcoming`)
  .then(response => response.json());

export const createLesson = (lesson) => fetch(`${baseURL}/api/lessons`, {
  method: 'POST',
  body: JSON.stringify(lesson), // body data type must match "Content-Type" header
})
  .then(response => response.json())
  .catch(error => console.error('Fetch Error =\n', error));

