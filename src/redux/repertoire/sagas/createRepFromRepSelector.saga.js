import { call, put, race, take, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE, goBack, push } from 'connected-react-router';

import { actionTypes } from '../repertoire.actions';
import {
  createRepertoireInstanceRequest,
} from '../../repOrExerciseInstances/repOrExerciseInstances.actions';

function* takeRoutingAwayFromAddRepPageAction() {
  while (true) {
    const action = yield take(LOCATION_CHANGE);
    if (action.payload.location.pathname !== '/add-rep') {
      return action.payload.location.pathname;
    }
    // else it's just routing to the /add-rep page, ignore and keep listening
    // for location change actions that route *away* from it
  }
}

function* createRepFromRepSelectorGenerator(action) {
  const { eventId } = action;
  // open add repertoire page...
  // TODO ...with the name of the repertoire already filled out from what the user
  // has entered here // yield put(editFormField('newRepertoire')('name')(repertoireName));
  yield put(push('/add-rep'));
  // TODO need to save any state from event page?

  // then wait for the rep item to be successfully submitted, or for it to fail
  // and the user to cancel adding the rep item, or the user to simply navigate away
  // and not complete this flow
  const { newRepSuccessAction, routeAwayFromAddRepPage } = yield race({
    newRepSuccessAction: take(actionTypes.REPERTOIRE.CREATE.SUCCESS),
    // if we get REPERTOIRE.CREATE.FAILURE, don't do anything; keep waiting for
    // either a success or for the user to give up and route elsewhere
    routeAwayFromAddRepPage: call(takeRoutingAwayFromAddRepPageAction),
  });

  if (newRepSuccessAction) {
    // add the new rep to the event as a repInstance
    const repertoireId = Object.keys(newRepSuccessAction.payload.repertoire)[0];
    yield put(createRepertoireInstanceRequest(repertoireId, eventId));
    yield put(goBack()); // go back to the event page
  } else if (routeAwayFromAddRepPage) {
    // just exit the saga
  } else {
    throw new Error('Unrecognised action type received');
  }

  // on failure -> show a popup - either try again (stay on the add rep page) or
  // just got back to the add event page
}

function* createLessonSaga() {
  yield takeLatest(
    actionTypes.REPERTOIRE.CREATE_FROM_REP_SELECTOR,
    createRepFromRepSelectorGenerator,
  );
}

export default createLessonSaga;
