import { actionTypes as repertoireActionTypes } from '../repertoire/repertoire.actions';
import { actionTypes as exercisesActionTypes } from '../exercises/exercises.actions';

const initialState = {
  gettingUpcomingRepertoire: false,
  fetchingRepertoire: false,
  fetchingExercises: false,
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
    default:
      return state;
  }
};

export default eventsReducer;
