import { put, fork, takeEvery } from 'redux-saga/effects';
import { loadingAction, successAction, errorAction, FETCH_TYPE } from './redux';

function* doSaga() {
  try {
    yield put(loadingAction());

    // fetch some data
    setTimeout(() => {}, 500);

    yield put(successAction());
  } catch (e) {
    yield put(errorAction(e));
  }   
}

export function* watchSaga() {
  yield fork(takeEvery, FETCH_TYPE, doSaga);
}