import { rootReducer } from './reducers/index';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
