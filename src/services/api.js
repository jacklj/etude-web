import { sortEventsReverseChronological } from './datetime';

const env = process.env.NODE_ENV || 'development';

const baseURL = env === 'development' ? 'http://localhost:8080' : 'http://singprocess.herokuapp.com';

export const getTimeline = () => fetch(`${baseURL}/api/events`) // eslint-disable-line
  .then(response => response.json())
  .then(timeline => sortEventsReverseChronological(timeline));
