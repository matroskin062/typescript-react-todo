import React from 'react';
import { ITodoItem } from '../interfaces';
import TodoItem from '../TodoItem/TodoItem';

type TodoListProps = {
  todos: ITodoItem[];
  toggleCompleteTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleCompleteTodo,
  deleteTodo,
}) => {
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
