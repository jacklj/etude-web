import { actionTypes as exercisesActionTypes } from '../exercises/exercises.actions';
import { actionTypes as locationsActionTypes } from '../locations/locations.actions';
import { actionTypes as repertoireActionTypes } from '../repertoire/repertoire.actions';
import { actionTypes as notesActionTypes } from '../notes/notes.actions';
import { actionTypes as peopleActionTypes } from '../people/people.actions';

const initialState = {
  gettingUpcomingRepertoire: false,
  fetchingRepertoire: false,
  fetchingExercises: false,
  fetchingLocations: false,
  creatingNote: false,
  updatingNote: false,
  deletingNote: false,
  fetchingPeople: false,
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
        // people: action.people,
        ...state,
        fetchingPeople: false,
      };
    case peopleActionTypes.PEOPLE.FETCH.FAILURE:
      return {
        ...state,
        fetchingPeople: false,
      };
    default:
      return state;
  }
};

export default flagsReducer;
