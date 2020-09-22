import { CHANGE_FILTER } from './../constants';
import { ADD_TODO, TodoActionTypes, FilterActionTypes } from './../types';
import { ITodoItem } from './../../interfaces';
import { COMPLETE_TODO, REMOVE_TODO } from '../constants';

export const addTodoItem = (todo: ITodoItem): TodoActionTypes => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodoItem = (id: string): TodoActionTypes => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const completeTodo = (id: string): TodoActionTypes => ({
  type: COMPLETE_TODO,
  payload: { id },
});

export const changeFilter = (filter: string): FilterActionTypes => ({
  type: CHANGE_FILTER,
  payload: { filter },
});
