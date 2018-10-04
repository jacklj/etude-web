import { actionTypes } from '../repertoire/repertoire.actions';

const initialState = {
  gettingUpcomingRepertoire: false,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPCOMING_REPERTOIRE.GET.REQUEST:
      return {
        ...state,
        gettingUpcomingRepertoire: true,
      };
    case actionTypes.UPCOMING_REPERTOIRE.GET.SUCCESS:
    case actionTypes.UPCOMING_REPERTOIRE.GET.FAILURE:
      return {
        ...state,
        gettingUpcomingRepertoire: false,
      };
    default:
      return state;
  }
};

export default eventsReducer;
