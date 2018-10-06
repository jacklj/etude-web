import { actionTypes as exercisesActionTypes } from '../exercises/exercises.actions';

const initialState = {
  fetchingExercises: false,
};

const flagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case exercisesActionTypes.EXERCISES.GET_ALL.REQUEST:
      return {
        ...state,
        fetchingExercises: true,
      };
    case exercisesActionTypes.EXERCISES.GET_ALL.SUCCESS:
      return {
        ...state,
        fetchingExercises: false,
      };
    case exercisesActionTypes.EXERCISES.GET_ALL.FAILURE:
      return {
        ...state,
        fetchingExercises: false,
      };
    default:
      return state;
  }
};

export default flagsReducer;
