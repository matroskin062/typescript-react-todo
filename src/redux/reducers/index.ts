import { todoReducer as todos } from './todoReducer';
import { filterReducer as filter } from './filterReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  filter,
  todos,
});
