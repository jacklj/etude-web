import { call, put, takeLatest } from 'redux-saga/effects';
import { createRepertoireInstance } from '../../../services/api';
import {
  createRepertoireInstanceSuccess,
  createRepertoireInstanceFailure,
  actionTypes,
} from '../repOrExerciseInstances.actions';

function* createRepertoireInstanceGenerator(action) {
  const { repertoireId, eventId } = action;
  try {
    const response = yield call(createRepertoireInstance, repertoireId, eventId);
    const body = yield response.json();
    if (response.status === 200) {
      yield put(createRepertoireInstanceSuccess(body));
    } else {
      yield put(createRepertoireInstanceFailure(body));
    }
  } catch (e) {
    yield put(createRepertoireInstanceFailure(e));
  }
}

function* createRepertoireInstanceSaga() {
  yield takeLatest(
    actionTypes.REPERTOIRE_INSTANCE.CREATE.REQUEST,
    createRepertoireInstanceGenerator,
  );
}

export default createRepertoireInstanceSaga;
