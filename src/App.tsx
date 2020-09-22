import { Button, Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import { ITodoItem } from './interfaces';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewTodo,
  changeFilter,
  fetchTodos,
  removeTodo,
  toggleTodoComplete,
} from './redux/actions/actions';
import { RootState } from './redux/store';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }: RootState) => todos.todos);
  const filter = useSelector(({ filter }: RootState) => filter);

  React.useEffect(() => {
    console.log('EFFECT');
    dispatch(fetchTodos());
  }, [dispatch]);

  const addTodo = (title: string) => {
    const newTodo: ITodoItem = {
      text: title,
      completed: false,
    };
    dispatch(addNewTodo(newTodo));
  };

  const toggleCompleteTodo = (id: string) => {
    dispatch(toggleTodoComplete(id));
  };

  const deleteTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

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

  const filterChange = (filter: string) => {
    dispatch(changeFilter(filter));
  };

  return (
    <Container maxWidth='md'>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={filterTodo(todos, filter)}
        toggleCompleteTodo={toggleCompleteTodo}
        deleteTodo={deleteTodo}
      />
      <Button
        variant={filter === 'all' ? 'contained' : 'outlined'}
        color='primary'
        onClick={() => filterChange('all')}
        className='active'
        style={{ marginRight: '10px' }}
      >
        ALL
      </Button>
      <Button
        variant={filter === 'active' ? 'contained' : 'outlined'}
        color='primary'
        onClick={() => filterChange('active')}
        style={{ marginRight: '10px' }}
      >
        Active
      </Button>
      <Button
        variant={filter === 'completed' ? 'contained' : 'outlined'}
        color='primary'
        onClick={() => filterChange('completed')}
        style={{ marginRight: '10px' }}
      >
        completed
      </Button>
    </Container>
  );
};

export default App;
