export const actionTypes = {
  REPERTOIRE: {
    GET_ALL: {
      REQUEST: 'REPERTOIRE.GET_ALL.REQUEST',
      SUCCESS: 'REPERTOIRE.GET_ALL.SUCCESS',
      FAILURE: 'REPERTOIRE.GET_ALL.FAILURE',
    },
    CREATE: {
      REQUEST: 'REPERTOIRE.CREATE.REQUEST',
      SUCCESS: 'REPERTOIRE.CREATE.SUCCESS',
      FAILURE: 'REPERTOIRE.CREATE.FAILURE',
    },
    CREATE_FROM_REP_SELECTOR: 'REPERTOIRE.CREATE_FROM_REP_SELECTOR',
  },
  UPCOMING_REPERTOIRE: {
    GET: {
      REQUEST: 'UPCOMING_REPERTOIRE.GET.REQUEST',
      SUCCESS: 'UPCOMING_REPERTOIRE.GET.SUCCESS',
      FAILURE: 'UPCOMING_REPERTOIRE.GET.FAILURE',
    },
  },
};

export const getAllRepertoireRequest = () => ({
  type: actionTypes.REPERTOIRE.GET_ALL.REQUEST,
});

export const getAllRepertoireSuccess = payload => ({
  type: actionTypes.REPERTOIRE.GET_ALL.SUCCESS,
  payload,
});

export const getAllRepertoireFailure = error => ({
  type: actionTypes.REPERTOIRE.GET_ALL.FAILURE,
  error,
});

export const getUpcomingRepertoireRequest = () => ({
  type: actionTypes.UPCOMING_REPERTOIRE.GET.REQUEST,
});

export const getUpcomingRepertoireSuccess = payload => ({
  type: actionTypes.UPCOMING_REPERTOIRE.GET.SUCCESS,
  payload,
});

export const getUpcomingRepertoireFailure = error => ({
  type: actionTypes.UPCOMING_REPERTOIRE.GET.FAILURE,
  error,
});

export const addNewRepertoireRequest = newRepertoire => ({
  type: actionTypes.REPERTOIRE.CREATE.REQUEST,
  newRepertoire,
});

export const addNewRepertoireSuccess = payload => ({
  type: actionTypes.REPERTOIRE.CREATE.SUCCESS,
  payload,
});

export const addNewRepertoireFailure = error => ({
  type: actionTypes.REPERTOIRE.CREATE.FAILURE,
  error,
});

export const createRepertoireFromRepSelector = repertoireName => ({
  type: actionTypes.REPERTOIRE.CREATE_FROM_REP_SELECTOR,
  repertoireName,
});
