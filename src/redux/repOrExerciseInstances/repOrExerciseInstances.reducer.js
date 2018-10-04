import { ACTION_TYPES } from './repOrExerciseInstances.actions';

const initialState = {
  // repertoire: {},
  // exercises: {},
  creatingRepertoireInstance: false,
  creatingExerciseInstance: false,
  deletingRepOrExerciseInstance: false,
};

const locations = (state = initialState, action) => {
  switch (action.type) {
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
    case ACTION_TYPES.EXERCISE_INSTANCE.CREATE.REQUEST:
      return {
        ...state,
        creatingExerciseInstance: true,
      };
    case ACTION_TYPES.EXERCISE_INSTANCE.CREATE.SUCCESS:
    case ACTION_TYPES.EXERCISE_INSTANCE.CREATE.FAILURE:
      return {
        ...state,
        creatingExerciseInstance: false,
      };
    case ACTION_TYPES.REP_OR_EXERCISE_INSTANCE.DELETE.REQUEST:
      return {
        ...state,
        deletingRepOrExerciseInstance: true,
      };
    case ACTION_TYPES.REP_OR_EXERCISE_INSTANCE.DELETE.SUCCESS:
    case ACTION_TYPES.REP_OR_EXERCISE_INSTANCE.DELETE.FAILURE:
      return {
        ...state,
        deletingRepOrExerciseInstance: false,
      };
    default:
      return state;
  }
};

export default locations;
