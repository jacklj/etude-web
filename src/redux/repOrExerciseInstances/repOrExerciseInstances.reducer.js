import { actionTypes } from './repOrExerciseInstances.actions';

const initialState = {
  // repertoire: {},
  // exercises: {},
  creatingRepertoireInstance: false,
  creatingExerciseInstance: false,
  deletingRepOrExerciseInstance: false,
};

const locations = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REPERTOIRE_INSTANCE.CREATE.REQUEST:
      return {
        ...state,
        creatingRepertoireInstance: true,
      };
    case actionTypes.REPERTOIRE_INSTANCE.CREATE.SUCCESS:
    case actionTypes.REPERTOIRE_INSTANCE.CREATE.FAILURE:
      return {
        ...state,
        creatingRepertoireInstance: false,
      };
    case actionTypes.EXERCISE_INSTANCE.CREATE.REQUEST:
      return {
        ...state,
        creatingExerciseInstance: true,
      };
    case actionTypes.EXERCISE_INSTANCE.CREATE.SUCCESS:
    case actionTypes.EXERCISE_INSTANCE.CREATE.FAILURE:
      return {
        ...state,
        creatingExerciseInstance: false,
      };
    case actionTypes.REP_OR_EXERCISE_INSTANCE.DELETE.REQUEST:
      return {
        ...state,
        deletingRepOrExerciseInstance: true,
      };
    case actionTypes.REP_OR_EXERCISE_INSTANCE.DELETE.SUCCESS:
    case actionTypes.REP_OR_EXERCISE_INSTANCE.DELETE.FAILURE:
      return {
        ...state,
        deletingRepOrExerciseInstance: false,
      };
    default:
      return state;
  }
};

export default locations;
