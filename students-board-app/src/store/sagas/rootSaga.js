import { all, fork } from 'redux-saga/effects';

import { sagaWatcher } from './saga';
import { authWatcher } from './authSaga';

const sagas = [sagaWatcher, authWatcher];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
