import { Container } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Filter from './components/Filter/Filter';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { ITodoItem } from './interfaces';
import { fetchTodos, addNewTodo } from './redux/actions/actions';
import { RootState } from './redux/store';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }: RootState) => todos.todos);
  const filter = useSelector(({ filter }: RootState) => filter);

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const filterTodo = (todos: ITodoItem[], filter: string): ITodoItem[] => {
    switch (filter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'active':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  const addTodo = (title: string) => {
    const newTodo: ITodoItem = {
      text: title,
      completed: false,
    };
    dispatch(addNewTodo(newTodo));
  };

  return (
    <Container maxWidth='md'>
      <TodoForm addTodo={addTodo} />
      <Filter filter={filter} />
      <TodoList todos={filterTodo(todos, filter)} />
    </Container>
  );
};

export default App;
