const env = process.env.NODE_ENV || 'development';

const baseUrl = env === 'development' ? 'http://localhost:8080' : 'https://singprocess.herokuapp.com';
const baseApiUrl = `${baseUrl}/api`;

export const getAllEvents = () => fetch(`${baseApiUrl}/events`);

export const getUpcomingRepertoire = () => fetch(`${baseApiUrl}/repertoire/upcoming`)
  .catch(error => console.error('getUpcomingRepertoire Fetch Error =\n', error));

export const createLesson = lesson => fetch(`${baseApiUrl}/events/lessons`, {
  method: 'POST',
  body: JSON.stringify(lesson),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .catch(error => console.error('createLesson Fetch Error =\n', error));

export const createPracticeSession = practiceSession => fetch(`${baseApiUrl}/events/practice_sessions`, {
  method: 'POST',
  body: JSON.stringify(practiceSession),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .catch(error => console.error('createPracticeSession Fetch Error =\n', error));

export const createPerformance = performance => fetch(`${baseApiUrl}/events/performances`, {
  method: 'POST',
  body: JSON.stringify(performance),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .catch(error => console.error('createPracticeSession Fetch Error =\n', error));

export const getEvent = eventId => fetch(`${baseApiUrl}/events/${eventId}`)
  .catch(error => console.error('getEvent Fetch Error =\n', error));

export const updateEvent = (event, eventId) => fetch(`${baseApiUrl}/events/${eventId}`, {
  method: 'PUT',
  body: JSON.stringify(event),
  headers: {
    'Content-Type': 'application/json; charset=utf-8', // need this for PUT or server thinks body is blank
  },
});

export const getLocations = () => fetch(`${baseApiUrl}/locations`);

export const createLocation = location => fetch(`${baseApiUrl}/locations/`, {
  method: 'POST',
  body: JSON.stringify(location),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .catch(error => console.error('createLocation Fetch Error =\n', error));

export const getPeople = () => fetch(`${baseApiUrl}/people`);

export const createPerson = person => fetch(`${baseApiUrl}/people/`, {
  method: 'POST',
  body: JSON.stringify(person),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .catch(error => console.error('createPerson Fetch Error =\n', error));

export const createNote = note => fetch(`${baseApiUrl}/notes/`, {
  method: 'POST',
  body: JSON.stringify(note),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .catch(error => console.error('createNote Fetch Error =\n', error));

export const updateNote = (note, noteId) => fetch(`${baseApiUrl}/notes/${noteId}`, {
  method: 'PUT',
  body: JSON.stringify(note),
  headers: {
    'Content-Type': 'application/json; charset=utf-8', // need this for PUT or server thinks body is blank
  },
})
  .catch(error => console.error('editNote Fetch Error =\n', error));

export const deleteNote = noteId => fetch(`${baseApiUrl}/notes/${noteId}`, {
  method: 'DELETE',
})
  .catch(error => console.error('deleteNote Fetch Error =\n', error));

export const getRepertoire = () => fetch(`${baseApiUrl}/repertoire`);

export const getRepertoireItem = repertoireId => fetch(`${baseApiUrl}/repertoire/${repertoireId}`)
  .catch(error => console.error('getRepertoireItem Fetch Error =\n', error));

export const getExercises = () => fetch(`${baseApiUrl}/exercises`);

export const createExercise = exercise => fetch(`${baseApiUrl}/exercises`, {
  method: 'POST',
  body: JSON.stringify(exercise),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .catch(error => console.error('createExercise Fetch Error =\n', error));


export const createRepertoireInstance = (repertoireId, eventId) => fetch(`${baseApiUrl}/events/${eventId}/repertoire`, {
  method: 'POST',
  body: JSON.stringify({ repertoireId }),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .catch(error => console.error('createRepertoireInstance Fetch Error =\n', error));

export const createExerciseInstance = (exerciseId, eventId) => fetch(`${baseApiUrl}/events/${eventId}/exercises`, {
  method: 'POST',
  body: JSON.stringify({ exerciseId }),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .catch(error => console.error('createExerciseInstance Fetch Error =\n', error));

export const deleteRepOrExerciseInstance = repOrExerciseInstanceId => fetch(`${baseApiUrl}/rep_or_exercise_instances/${repOrExerciseInstanceId}`, {
  method: 'DELETE',
})
  .catch(error => console.error('deleteRepOrExerciseInstance Fetch Error =\n', error));

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

export const deleteEvent = eventId => fetch(`${baseApiUrl}/events/${eventId}`, {
  method: 'DELETE',
})
  .catch(error => console.error('deleteEvent Fetch Error =\n', error));

export const createNewRepertoire = newRepertoire => fetch(`${baseApiUrl}/repertoire`, {
  method: 'POST',
  body: JSON.stringify(newRepertoire),
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
  .catch(error => console.error('createNewRepertoire Fetch Error =\n', error));
