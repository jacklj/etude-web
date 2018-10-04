import { actionTypes as exercisesActionTypes } from '../exercises/exercises.actions';
import { actionTypes as locationsActionTypes } from '../locations/locations.actions';
import { actionTypes as repertoireActionTypes } from '../repertoire/repertoire.actions';
import { actionTypes as notesActionTypes } from '../notes/notes.actions';
import { actionTypes as peopleActionTypes } from '../people/people.actions';
import { actionTypes as eventsActionTypes } from '../events/events.actions';
import { actionTypes as repOrExerciseInstancesActionTypes } from '../repOrExerciseInstances/repOrExerciseInstances.actions';

const initialState = {
  gettingUpcomingRepertoire: false,
  fetchingRepertoire: false,
  fetchingExercises: false,
  fetchingLocations: false,
  creatingNote: false,
  updatingNote: false,
  deletingNote: false,
  fetchingPeople: false,
  fetchingAllEvents: false,
  fetchingEvent: false,
  updatingEvent: false,
  deletingEvent: false,
  creatingLesson: false,
  creatingRepertoireInstance: false,
  creatingExerciseInstance: false,
  deletingRepOrExerciseInstance: false,
};

const flagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case repertoireActionTypes.UPCOMING_REPERTOIRE.GET.REQUEST:
      return {
        ...state,
        gettingUpcomingRepertoire: true,
      };
    case repertoireActionTypes.UPCOMING_REPERTOIRE.GET.SUCCESS:
    case repertoireActionTypes.UPCOMING_REPERTOIRE.GET.FAILURE:
      return {
        ...state,
        gettingUpcomingRepertoire: false,
      };
    case repertoireActionTypes.REPERTOIRE.FETCH_ALL.REQUEST:
      return {
        ...state,
        fetchingRepertoire: true,
      };
    case repertoireActionTypes.REPERTOIRE.FETCH_ALL.SUCCESS:
      return {
        ...state,
        fetchingRepertoire: false,
      };
    case repertoireActionTypes.REPERTOIRE.FETCH_ALL.FAILURE:
      return {
        ...state,
        fetchingRepertoire: false,
      };
    case exercisesActionTypes.EXERCISES.FETCH_ALL.REQUEST:
      return {
        ...state,
        fetchingExercises: true,
      };
    case exercisesActionTypes.EXERCISES.FETCH_ALL.SUCCESS:
      return {
        ...state,
        fetchingExercises: false,
      };
    case exercisesActionTypes.EXERCISES.FETCH_ALL.FAILURE:
      return {
        ...state,
        fetchingExercises: false,
      };
    case locationsActionTypes.LOCATIONS.FETCH.REQUEST:
      return {
        ...state,
        fetchingLocations: true,
      };
    case locationsActionTypes.LOCATIONS.FETCH.SUCCESS:
      return {
        ...state,
        fetchingLocations: false,
      };
    case locationsActionTypes.LOCATIONS.FETCH.FAILURE:
      return {
        ...state,
        fetchingLocations: false,
      };
    case notesActionTypes.NOTE.CREATE_AND_ADD_TO.EVENT.REQUEST:
    case notesActionTypes.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.REQUEST:
      return {
        ...state,
        creatingNote: true,
      };
    case notesActionTypes.NOTE.CREATE_AND_ADD_TO.EVENT.SUCCESS:
    case notesActionTypes.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.SUCCESS:
      return {
        ...state,
        creatingNote: false,
      };
    case notesActionTypes.NOTE.CREATE_AND_ADD_TO.EVENT.FAILURE:
    case notesActionTypes.NOTE.CREATE_AND_ADD_TO.REP_OR_EXERCISE_INSTANCE.FAILURE:
      return {
        ...state,
        creatingNote: false,
      };
    case notesActionTypes.NOTE.UPDATE.REQUEST:
      return {
        ...state,
        updatingNote: true,
      };
    case notesActionTypes.NOTE.UPDATE.SUCCESS:
      return {
        ...state,
        updatingNote: false,
      };
    case notesActionTypes.NOTE.UPDATE.FAILURE:
      return {
        ...state,
        updatingNote: false,
      };
    case notesActionTypes.NOTE.DELETE.REQUEST:
      return {
        ...state,
        deletingNote: true,
      };
    case notesActionTypes.NOTE.DELETE.SUCCESS: {
      return {
        ...state,
        deletingNote: false,
      };
    }
    case notesActionTypes.NOTE.DELETE.FAILURE:
      return {
        ...state,
        deletingNote: false,
      };
    case peopleActionTypes.PEOPLE.FETCH.REQUEST:
      return {
        ...state,
        fetchingPeople: true,
      };
    case peopleActionTypes.PEOPLE.FETCH.SUCCESS:
      return {
        ...state,
        fetchingPeople: false,
      };
    case peopleActionTypes.PEOPLE.FETCH.FAILURE:
      return {
        ...state,
        fetchingPeople: false,
      };
    case eventsActionTypes.EVENT.GET_ALL.REQUEST:
      return {
        ...state,
        fetchingAllEvents: true,
      };
    case eventsActionTypes.EVENT.GET_ALL.SUCCESS:
      return {
        ...state,
        fetchingAllEvents: false,
      };
    case eventsActionTypes.EVENT.GET_ALL.FAILURE:
      return {
        ...state,
        fetchingAllEvents: false,
      };
    case eventsActionTypes.EVENT.GET.REQUEST:
      return {
        ...state,
        fetchingEvent: true,
      };
    case eventsActionTypes.EVENT.GET.SUCCESS:
      return {
        ...state,
        fetchingEvent: false,
      };
    case eventsActionTypes.EVENT.GET.FAILURE:
      return {
        ...state,
        fetchingEvent: false,
      };
    case eventsActionTypes.EVENT.DELETE.REQUEST:
      return {
        ...state,
        deletingEvent: true,
      };
    case eventsActionTypes.EVENT.DELETE.SUCCESS: {
      return {
        ...state,
        deletingEvent: false,
      };
    }
    case eventsActionTypes.EVENT.DELETE.FAILURE:
      return {
        ...state,
        deletingEvent: false,
      };
    case eventsActionTypes.EVENT.UPDATE.REQUEST:
      return {
        ...state,
        updatingEvent: true,
      };
    case eventsActionTypes.EVENT.UPDATE.SUCCESS:
      return {
        ...state,
        updatingEvent: false,
      };
    case eventsActionTypes.EVENT.UPDATE.FAILURE:
      return {
        ...state,
        updatingEvent: false,
      };
    case eventsActionTypes.LESSON.CREATE.REQUEST:
      return {
        ...state,
        creatingLesson: true,
      };
    case eventsActionTypes.LESSON.CREATE.SUCCESS:
      return {
        ...state,
        creatingLesson: false,
      };
    case eventsActionTypes.LESSON.CREATE.FAILURE:
      return {
        ...state,
        creatingLesson: false,
      };
    case eventsActionTypes.PRACTICE_SESSION.CREATE.REQUEST:
      return {
        ...state,
        creatingPracticeSession: true,
      };
    case eventsActionTypes.PRACTICE_SESSION.CREATE.SUCCESS:
      return {
        ...state,
        creatingPracticeSession: false,
      };
    case eventsActionTypes.PRACTICE_SESSION.CREATE.FAILURE:
      return {
        ...state,
        creatingPracticeSession: false,
      };
    case repOrExerciseInstancesActionTypes.REPERTOIRE_INSTANCE.CREATE.REQUEST:
      return {
        ...state,
        creatingRepertoireInstance: true,
      };
    case repOrExerciseInstancesActionTypes.REPERTOIRE_INSTANCE.CREATE.SUCCESS:
    case repOrExerciseInstancesActionTypes.REPERTOIRE_INSTANCE.CREATE.FAILURE:
      return {
        ...state,
        creatingRepertoireInstance: false,
      };
    case repOrExerciseInstancesActionTypes.EXERCISE_INSTANCE.CREATE.REQUEST:
      return {
        ...state,
        creatingExerciseInstance: true,
      };
    case repOrExerciseInstancesActionTypes.EXERCISE_INSTANCE.CREATE.SUCCESS:
    case repOrExerciseInstancesActionTypes.EXERCISE_INSTANCE.CREATE.FAILURE:
      return {
        ...state,
        creatingExerciseInstance: false,
      };
    case repOrExerciseInstancesActionTypes.REP_OR_EXERCISE_INSTANCE.DELETE.REQUEST:
      return {
        ...state,
        deletingRepOrExerciseInstance: true,
      };
    case repOrExerciseInstancesActionTypes.REP_OR_EXERCISE_INSTANCE.DELETE.SUCCESS:
    case repOrExerciseInstancesActionTypes.REP_OR_EXERCISE_INSTANCE.DELETE.FAILURE:
      return {
        ...state,
        deletingRepOrExerciseInstance: false,
      };
    default:
      return state;
  }
};

export default flagsReducer;
