import { RootState } from './store';
import {
  COMPLETE_TODO,
  REMOVE_TODO,
  CHANGE_FILTER,
  FETCH_TODOS,
  SET_TODOS,
} from './constants';
import { ITodoItem } from './../interfaces';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

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

interface FetchTodosAction {
  type: typeof FETCH_TODOS;
  payload: ITodoItem[];
}

interface SetTodosAction {
  type: typeof SET_TODOS;
  payload: ITodoItem[];
}

export type TodoActionTypes =
  | AddTodoAction
  | RemoveTodoAction
  | CompleteTodoAction
  | FetchTodosAction
  | SetTodosAction;

export type FilterActionTypes = ChangeFilterAction;

export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
