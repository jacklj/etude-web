export const actionTypes = {
  REPERTOIRE: {
    FETCH_ALL: {
      REQUEST: 'REPERTOIRE.FETCH_ALL.REQUEST',
      SUCCESS: 'REPERTOIRE.FETCH_ALL.SUCCESS',
      FAILURE: 'REPERTOIRE.FETCH_ALL.FAILURE',
    },
  },
  UPCOMING_REPERTOIRE: {
    GET: {
      REQUEST: 'UPCOMING_REPERTOIRE.GET.REQUEST',
      SUCCESS: 'UPCOMING_REPERTOIRE.GET.SUCCESS',
      FAILURE: 'UPCOMING_REPERTOIRE.GET.FAILURE',
    },
  },
};

export const fetchAllRepertoireRequest = () => ({
  type: actionTypes.REPERTOIRE.FETCH_ALL.REQUEST,
});

export const fetchAllRepertoireSuccess = payload => ({
  type: actionTypes.REPERTOIRE.FETCH_ALL.SUCCESS,
  payload,
});

export const fetchAllRepertoireFailure = error => ({
  type: actionTypes.REPERTOIRE.FETCH_ALL.FAILURE,
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
