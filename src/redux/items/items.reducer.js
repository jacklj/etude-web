import { ACTION_TYPES } from './items.actions';

const initialState = {
  repertoire: {},
  exercises: {},
  fetchingRepertoire: false,
  fetchingExercises: false,
  creatingRepertoireInstance: false,
};

const locations = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REPERTOIRE.FETCH_ALL.REQUEST:
      return {
        ...state,
        fetchingRepertoire: true,
      };
    case ACTION_TYPES.REPERTOIRE.FETCH_ALL.SUCCESS:
      return {
        ...state,
        repertoire: action.repertoire,
        fetchingRepertoire: false,
      };
    case ACTION_TYPES.REPERTOIRE.FETCH_ALL.FAILURE:
      return {
        ...state,
        fetchingRepertoire: false,
      };
    case ACTION_TYPES.EXERCISES.FETCH_ALL.REQUEST:
      return {
        ...state,
        fetchingExercises: true,
      };
    case ACTION_TYPES.EXERCISES.FETCH_ALL.SUCCESS:
      return {
        ...state,
        exercises: action.exercises,
        fetchingExercises: false,
      };
    case ACTION_TYPES.EXERCISES.FETCH_ALL.FAILURE:
      return {
        ...state,
        fetchingExercises: false,
      };
    case ACTION_TYPES.REPERTOIRE_INSTANCE.CREATE.REQUEST:
      return {
        ...state,
        creatingRepertoireInstance: true,
      };
    case ACTION_TYPES.REPERTOIRE_INSTANCE.CREATE.SUCCESS:
    case ACTION_TYPES.REPERTOIRE_INSTANCE.CREATE.FAILURE:
      return {
        ...state,
        creatingRepertoireInstance: false,
      };
    default:
      return state;
  }
};

export default locations;