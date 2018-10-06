import { actionTypes as repertoireActionTypes } from '../repertoire/repertoire.actions';

const initialState = {
  gettingUpcomingRepertoire: false,
  fetchingRepertoire: false,
};

const flagsReducer = (state = initialState, action) => {
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
    case repertoireActionTypes.REPERTOIRE.GET_ALL.REQUEST:
      return {
        ...state,
        fetchingRepertoire: true,
      };
    case repertoireActionTypes.REPERTOIRE.GET_ALL.SUCCESS:
      return {
        ...state,
        fetchingRepertoire: false,
      };
    case repertoireActionTypes.REPERTOIRE.GET_ALL.FAILURE:
      return {
        ...state,
        fetchingRepertoire: false,
      };
    default:
      return state;
  }
};

export default flagsReducer;
