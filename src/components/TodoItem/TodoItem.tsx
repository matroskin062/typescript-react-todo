import { Button, Card, Checkbox, makeStyles } from '@material-ui/core';
import React from 'react';

type TodoItemProps = {
  text: string;
  completed: boolean;
  id?: string;
  toggleCompleteTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  completed,
  deleteTodo,
  toggleCompleteTodo,
  id,
}) => {
  const useStyles = makeStyles({
    card: {
      marginBottom: '20px',
      padding: '20px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '700px',
    },
  });

  const clasess = useStyles();

  return (
    <Card className={clasess.card} variant='outlined'>
      <Checkbox checked={completed} onChange={() => toggleCompleteTodo(id!)} />
      <span className={completed ? 'done' : 'active'}>{text}</span>
      <Button
        variant='contained'
        color='secondary'
        onClick={() => deleteTodo(id!)}
      >
        Delete
      </Button>
    </Card>
  );
};

export default TodoItem;
