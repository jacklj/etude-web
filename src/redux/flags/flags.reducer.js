import { actionTypes as exercisesActionTypes } from '../exercises/exercises.actions';
import { actionTypes as locationsActionTypes } from '../locations/locations.actions';
import { actionTypes as repertoireActionTypes } from '../repertoire/repertoire.actions';

const initialState = {
  gettingUpcomingRepertoire: false,
  fetchingRepertoire: false,
  fetchingExercises: false,
  fetchingLocations: false,
};

const eventsReducer = (state = initialState, action) => {
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
        // repertoire: action.repertoire,
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
        // exercises: action.exercises,
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
        fetchingLocations: false,
      };
    case locationsActionTypes.LOCATIONS.FETCH.FAILURE:
      return {
        ...state,
        fetchingLocations: false,
      };
    default:
      return state;
  }
};

export default eventsReducer;
