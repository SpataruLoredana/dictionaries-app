import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import dictionaries from './dictionaries/reducer';

const rootReducer = combineReducers({
  dictionaries
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    middlewareEnhancer
  );
  return store;
}
