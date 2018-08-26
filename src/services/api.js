const env = process.env.NODE_ENV || 'development';

const baseUrl = env === 'development' ? 'http://localhost:8080' : 'https://singprocess.herokuapp.com';
const baseApiUrl = `${baseUrl}/api`;

export const getTimeline = () => fetch(`${baseApiUrl}/events`).then(response => response.json());

export const getUpcomingRepertoire = () => fetch(`${baseApiUrl}/repertoire/upcoming`).then(response => response.json());

export const createLesson = lesson => fetch(`${baseApiUrl}/events/lessons`, {
  method: 'POST',
  body: JSON.stringify(lesson),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .then(response => response.json())
  .catch(error => console.error('createLesson Fetch Error =\n', error));

export const createPracticeSession = practiceSession => fetch(`${baseApiUrl}/events/practice_sessions`, {
  method: 'POST',
  body: JSON.stringify(practiceSession),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .then(response => response.json())
  .catch(error => console.error('createPracticeSession Fetch Error =\n', error));

export const updateLesson = (lesson, eventId) => fetch(`${baseApiUrl}/events/lessons/${eventId}`, {
  method: 'PUT',
  body: JSON.stringify(lesson),
  headers: {
    'Content-Type': 'application/json; charset=utf-8', // need this for PUT or server thinks body is blank
  },
})
  .then(response => response.json())
  .catch(error => console.error('updateLesson Fetch Error =\n', error));

export const getEvent = eventId => fetch(`${baseApiUrl}/events/${eventId}`).then(response => response.json());

export const getLocations = () => fetch(`${baseApiUrl}/locations`).then(response => response.json());

export const getPeople = () => fetch(`${baseApiUrl}/people`).then(response => response.json());

export const getTeachers = () => fetch(`${baseApiUrl}/people/teachers`).then(response => response.json());

export const createNote = note => fetch(`${baseApiUrl}/notes/`, {
  method: 'POST',
  body: JSON.stringify(note),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .then(response => response.json())
  .catch(error => console.error('createNote Fetch Error =\n', error));

export const updateNote = (note, noteId) => fetch(`${baseApiUrl}/notes/${noteId}`, {
  method: 'PUT',
  body: JSON.stringify(note),
  headers: {
    'Content-Type': 'application/json; charset=utf-8', // need this for PUT or server thinks body is blank
  },
})
  .then(response => response.json())
  .catch(error => console.error('editNote Fetch Error =\n', error));

export const deleteNote = noteId => fetch(`${baseApiUrl}/notes/${noteId}`, {
  method: 'DELETE',
})
  .catch(error => console.error('deleteNote Fetch Error =\n', error));

export const getRepertoire = () => fetch(`${baseApiUrl}/repertoire`).then(response => response.json());

export const getExercises = () => fetch(`${baseApiUrl}/exercises`).then(response => response.json());

export const createRepertoireInstance = (repertoireId, eventId) => fetch(`${baseApiUrl}/events/${eventId}/repertoire`, {
  method: 'POST',
  body: JSON.stringify({ repertoireId }),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .then(response => response.json())
  .catch(error => console.error('createRepertoireInstance Fetch Error =\n', error));

export const createExerciseInstance = (exerciseId, eventId) => fetch(`${baseApiUrl}/events/${eventId}/exercises`, {
  method: 'POST',
  body: JSON.stringify({ exerciseId }),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .then(response => response.json())
  .catch(error => console.error('createExerciseInstance Fetch Error =\n', error));

export const deleteItem = itemId => fetch(`${baseApiUrl}/items/${itemId}`, {
  method: 'DELETE',
})
  .catch(error => console.error('deleteItem Fetch Error =\n', error));

export const startPracticeSession = id => fetch(`${baseApiUrl}/events/practice_sessions/${id}/start`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .catch(error => console.error('startPracticeSession Fetch Error =\n', error));

export const finishPracticeSession = id => fetch(`${baseApiUrl}/events/practice_sessions/${id}/finish`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .catch(error => console.error('finishPracticeSession Fetch Error =\n', error));
