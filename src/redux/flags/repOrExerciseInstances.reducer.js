import { actionTypes as repOrExerciseInstancesActionTypes } from '../repOrExerciseInstances/repOrExerciseInstances.actions';

const initialState = {
  creatingRepertoireInstance: false,
  creatingExerciseInstance: false,
  deletingRepOrExerciseInstance: false,
};

const flagsReducer = (state = initialState, action) => {
  switch (action.type) {
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
