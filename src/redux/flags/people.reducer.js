import { actionTypes as peopleActionTypes } from '../people/people.actions';

const initialState = {
  fetchingPeople: false,
  creatingPerson: false,
};

const flagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case peopleActionTypes.PEOPLE.GET_ALL.REQUEST:
      return {
        ...state,
        fetchingPeople: true,
      };
    case peopleActionTypes.PEOPLE.GET_ALL.SUCCESS:
      return {
        ...state,
        fetchingPeople: false,
      };
    case peopleActionTypes.PEOPLE.GET_ALL.FAILURE:
      return {
        ...state,
        fetchingPeople: false,
      };
    case peopleActionTypes.PEOPLE.CREATE.REQUEST:
      return {
        ...state,
        creatingPerson: true,
      };
    case peopleActionTypes.PEOPLE.CREATE.SUCCESS:
      return {
        ...state,
        creatingPerson: false,
      };
    case peopleActionTypes.PEOPLE.CREATE.FAILURE:
      return {
        ...state,
        creatingPerson: false,
      };
    default:
      return state;
  }
};

export default flagsReducer;
