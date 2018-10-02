export const actionTypes = {
  UPCOMING_REPERTOIRE: {
    GET: {
      REQUEST: 'UPCOMING_REPERTOIRE.GET.REQUEST',
      SUCCESS: 'UPCOMING_REPERTOIRE.GET.SUCCESS',
      FAILURE: 'UPCOMING_REPERTOIRE.GET.FAILURE',
    },
  },
};

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
