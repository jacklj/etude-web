import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteItem } from '../../../services/api';
import { deleteItemSuccess, deleteItemFailure, ACTION_TYPES } from '../repOrExerciseInstances.actions';

function* deleteItemGenerator(action) {
  const { itemId, eventId } = action;
  try {
    yield call(deleteItem, itemId);
    const actionToDispatch = deleteItemSuccess(itemId, eventId);
    yield put(actionToDispatch);
  } catch (e) {
    const actionToDispatch = deleteItemFailure(e);
    yield put(actionToDispatch);
  }
}

function* deleteItemSaga() {
  yield takeLatest(ACTION_TYPES.ITEM.DELETE.REQUEST, deleteItemGenerator);
}

export default deleteItemSaga;
