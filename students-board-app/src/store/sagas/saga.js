import { takeEvery, put } from 'redux-saga/effects';
import { changeLoader } from '../actions/app';

export function* sagaWatcher() {
  yield takeEvery('Action', sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(changeLoader(true));
    yield put(changeLoader(false));
  } catch (e) {
    yield put(changeLoader(false));
  }
}
