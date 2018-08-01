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
  body: JSON.stringify(lesson),
  headers: {
    'Content-Type': 'application/json; charset=utf-8', // need this for PUT or server thinks body is blank
  },
})
  .then(response => response.json())
  .catch(error => console.error('createLesson Fetch Error =\n', error));

export const editLesson = (lesson, eventId) => fetch(`${baseURL}/api/lessons/${eventId}`, {
  method: 'PUT',
  body: JSON.stringify(lesson),
  headers: {
    'Content-Type': 'application/json; charset=utf-8', // need this for PUT or server thinks body is blank
  },
})
  .then(response => response.json())
  .catch(error => console.error('editLesson Fetch Error =\n', error));

export const getLocations = () => fetch(`${baseURL}/api/locations`)
  .then(response => response.json());

export const getPeople = () => fetch(`${baseURL}/api/people`)
  .then(response => response.json());

export const getTeachers = () => fetch(`${baseURL}/api/people/teachers`)
  .then(response => response.json());
