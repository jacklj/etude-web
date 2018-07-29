import { sortEventsReverseChronological } from './datetime';

const env = process.env.NODE_ENV || 'development';

const baseURL = env === 'development' ? 'http://localhost:8080' : 'http://singprocess.herokuapp.com';

export const getTimeline = () => fetch(`${baseURL}/api/events`)
  .then(response => response.json())
  .then(timeline => sortEventsReverseChronological(timeline));

export const getUpcomingRepertoire = () => fetch(`${baseURL}/api/repertoire/upcoming`)
  .then(response => response.json());
