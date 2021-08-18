import { takeLatest, put } from 'redux-saga/effects';
import { AUTH_LOGIN } from '../../actionTypes';
import { authIn } from '../../actions/app';

export function* authWatcher() {
  yield takeLatest(AUTH_LOGIN, authWorker);
}

export function* authWorker() {
  yield put(authIn(true));
}
