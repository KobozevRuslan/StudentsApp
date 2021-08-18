import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import authReducer from './reducers/authReducer';
import appReducer from './reducers/appReducer';
import rootSaga from './sagas/rootSaga';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

const logger = store => next => action => {
  console.log('action', action);
  let result = next(action);
  console.log('nex state', store.getState());
  return result;
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(rootSaga);
