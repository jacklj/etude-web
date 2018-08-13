import { ACTION_TYPES } from './people.actions';

const initialState = {
  people: [],
  fetching: false,
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.PEOPLE_FETCH.REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case ACTION_TYPES.PEOPLE_FETCH.SUCCESS:
      return {
        people: action.people,
        fetching: false,
      };
    case ACTION_TYPES.PEOPLE_FETCH.FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};

export default people;
