import { CHANGE_FILTER, SET_TODOS } from './../constants';
import {
  ADD_TODO,
  TodoActionTypes,
  FilterActionTypes,
  Thunk,
} from './../types';
import { ITodoItem } from './../../interfaces';
import { COMPLETE_TODO, REMOVE_TODO } from '../constants';
import axios from 'axios';

const addTodoItem = (todo: ITodoItem): TodoActionTypes => ({
  type: ADD_TODO,
  payload: todo,
});

const removeTodoItem = (id: string): TodoActionTypes => ({
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

const setTodos = (todos: ITodoItem[]): TodoActionTypes => ({
  type: SET_TODOS,
  payload: todos,
});

export const fetchTodos = (): Thunk => async (dispatch) => {
  const { data } = await axios.get<ITodoItem[]>('http://localhost:3005/todos');
  dispatch(setTodos(data));
};

export const addNewTodo = (todo: ITodoItem): Thunk => async (dispatch) => {
  const { data } = await axios.post<ITodoItem>(
    'http://localhost:3005/todos',
    todo
  );
  dispatch(addTodoItem(data));
};

export const removeTodo = (id: string): Thunk => async (dispatch) => {
  await axios.delete(`http://localhost:3005/todos/${id}`);
  dispatch(removeTodoItem(id));
};

export const toggleTodoComplete = (id: string): Thunk => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3005/todos/${id}`);
  await axios.patch(`http://localhost:3005/todos/${id}`, {
    completed: !data.completed,
  });
  dispatch(completeTodo(id));
};
