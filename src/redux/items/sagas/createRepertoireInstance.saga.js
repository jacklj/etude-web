import { call, put, takeLatest } from 'redux-saga/effects';
import { createRepertoireInstance } from '../../../services/api';
import {
  createRepertoireInstanceSuccess,
  createRepertoireInstanceFailure,
  ACTION_TYPES,
} from '../items.actions';

function* createRepertoireInstanceGenerator(action) {
  const { repertoireId, eventId } = action;
  try {
    const newRepertoireInstance = yield call(createRepertoireInstance, repertoireId, eventId);
    const actionToDispatch = createRepertoireInstanceSuccess(newRepertoireInstance);
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = createRepertoireInstanceFailure(e);
    yield put(actionToDispatch);
  }
}

function* createRepertoireInstanceSaga() {
  yield takeLatest(
    ACTION_TYPES.REPERTOIRE_INSTANCE.CREATE.REQUEST,
    createRepertoireInstanceGenerator,
  );
}

export default createRepertoireInstanceSaga;
