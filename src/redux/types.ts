import { COMPLETE_TODO, REMOVE_TODO, CHANGE_FILTER } from './constants';
import { ITodoItem } from './../interfaces';

export const ADD_TODO = 'ADD_TODO';

export interface TodoState {
  todos: ITodoItem[];
}

export type Filter = string;

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: ITodoItem;
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: {
    id: string;
  };
}

interface CompleteTodoAction {
  type: typeof COMPLETE_TODO;
  payload: {
    id: string;
  };
}

interface ChangeFilterAction {
  type: typeof CHANGE_FILTER;
  payload: {
    filter: string;
  };
}
export type TodoActionTypes =
  | AddTodoAction
  | RemoveTodoAction
  | CompleteTodoAction;

export type FilterActionTypes = ChangeFilterAction;
