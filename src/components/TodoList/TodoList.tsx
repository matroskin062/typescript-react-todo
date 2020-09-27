import React from 'react';
import { useDispatch } from 'react-redux';
import { ITodoItem } from '../../interfaces';
import { toggleTodoComplete, removeTodo } from '../../redux/actions/actions';
import TodoItem from '../TodoItem/TodoItem';

type TodoListProps = {
  todos: ITodoItem[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const dispatch = useDispatch();

  const toggleCompleteTodo = (id: string) => {
    dispatch(toggleTodoComplete(id));
  };

  const deleteTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  if (!todos.length) return <p>No Todos</p>;
  return (
    <>
      {todos.map((todo: ITodoItem) => (
        <TodoItem
          {...todo}
          key={todo.id}
          toggleCompleteTodo={toggleCompleteTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
