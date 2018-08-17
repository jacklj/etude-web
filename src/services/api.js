const env = process.env.NODE_ENV || 'development';

const baseURL = env === 'development' ? 'http://localhost:8080' : 'https://singprocess.herokuapp.com';

export const getTimeline = () => fetch(`${baseURL}/api/events`).then(response => response.json());

export const getUpcomingRepertoire = () => fetch(`${baseURL}/api/repertoire/upcoming`).then(response => response.json());

export const createLesson = lesson => fetch(`${baseURL}/api/lessons`, {
  method: 'POST',
  body: JSON.stringify(lesson),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .then(response => response.json())
  .catch(error => console.error('createLesson Fetch Error =\n', error));

export const updateLesson = (lesson, eventId) => fetch(`${baseURL}/api/lessons/${eventId}`, {
  method: 'PUT',
  body: JSON.stringify(lesson),
  headers: {
    'Content-Type': 'application/json; charset=utf-8', // need this for PUT or server thinks body is blank
  },
})
  .then(response => response.json())
  .catch(error => console.error('updateLesson Fetch Error =\n', error));

export const getLesson = eventId => fetch(`${baseURL}/api/lessons/${eventId}`).then(response => response.json());

export const getLocations = () => fetch(`${baseURL}/api/locations`).then(response => response.json());

export const getPeople = () => fetch(`${baseURL}/api/people`).then(response => response.json());

export const getTeachers = () => fetch(`${baseURL}/api/people/teachers`).then(response => response.json());

export const createNote = note => fetch(`${baseURL}/api/notes/`, {
  method: 'POST',
  body: JSON.stringify(note),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .then(response => response.json())
  .catch(error => console.error('createNote Fetch Error =\n', error));

export const updateNote = (note, noteId) => fetch(`${baseURL}/api/notes/${noteId}`, {
  method: 'PUT',
  body: JSON.stringify(note),
  headers: {
    'Content-Type': 'application/json; charset=utf-8', // need this for PUT or server thinks body is blank
  },
})
  .then(response => response.json())
  .catch(error => console.error('editNote Fetch Error =\n', error));

export const deleteNote = noteId => fetch(`${baseURL}/api/notes/${noteId}`, {
  method: 'DELETE',
})
  .catch(error => console.error('deleteNote Fetch Error =\n', error));

export const getRepertoire = () => fetch(`${baseURL}/api/repertoire`).then(response => response.json());

export const getExercises = () => fetch(`${baseURL}/api/exercises`).then(response => response.json());

export const createRepertoireInstance = (repertoireId, eventId) => fetch(`${baseURL}/api/events/${eventId}/repertoire`, {
  method: 'POST',
  body: JSON.stringify({ repertoireId }),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .then(response => response.json())
  .catch(error => console.error('createRepertoireInstance Fetch Error =\n', error));

export const createExerciseInstance = (exerciseId, eventId) => fetch(`${baseURL}/api/events/${eventId}/exercises`, {
  method: 'POST',
  body: JSON.stringify({ exerciseId }),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .then(response => response.json())
  .catch(error => console.error('createExerciseInstance Fetch Error =\n', error));

export const deleteItem = itemId => fetch(`${baseURL}/api/items/${itemId}`, {
  method: 'DELETE',
})
  .catch(error => console.error('deleteItem Fetch Error =\n', error));
