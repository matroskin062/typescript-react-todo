import { rootReducer } from './reducers/index';
import { compose, createStore } from 'redux';

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
export type RootState = ReturnType<typeof rootReducer>;
