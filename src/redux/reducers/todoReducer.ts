import { COMPLETE_TODO, REMOVE_TODO } from '../constants';
import { TodoState, TodoActionTypes, ADD_TODO } from '../types';
const initialState: TodoState = {
  todos: [{ id: '1', text: '1', completed: false }],
};

export const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case COMPLETE_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }
    default:
      return state;
  }
};
