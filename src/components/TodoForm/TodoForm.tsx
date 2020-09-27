import { Button, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

type TodoFormProps = {
  addTodo: (title: string) => void;
};
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = React.useState<string>('');

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    title.trim() ? addTodo(title) : console.log('empty value');
    setTitle('');
  };

  const useStyles = makeStyles({
    form: {
      padding: '20px 0px',
    },
    input: {
      marginRight: '20px',
    },
  });

  const clasess = useStyles();
  return (
    <div className={clasess.form}>
      <TextField
        type='text'
        placeholder='Введите название задачи'
        onChange={inputChangeHandler}
        value={title}
        className={clasess.input}
      />
      <Button color='primary' variant='contained' onClick={onSubmit}>
        Добавить задачу
      </Button>
    </div>
  );
};

export default TodoForm;
