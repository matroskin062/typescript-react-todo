import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions/actions';

const Filter: React.FC<{ filter: string }> = ({ filter }) => {
  const dispatch = useDispatch();
  const filterChange = (filter: string) => {
    dispatch(changeFilter(filter));
  };

  const useStyles = makeStyles({
    root: {
      margin: '10px 0',
    },
    button: {
      marginRight: '10px',
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        variant={filter === 'all' ? 'contained' : 'outlined'}
        color='primary'
        onClick={() => filterChange('all')}
        className={classes.button}
      >
        ALL
      </Button>
      <Button
        variant={filter === 'active' ? 'contained' : 'outlined'}
        color='primary'
        onClick={() => filterChange('active')}
        className={classes.button}
      >
        Active
      </Button>
      <Button
        variant={filter === 'completed' ? 'contained' : 'outlined'}
        color='primary'
        onClick={() => filterChange('completed')}
        className={classes.button}
      >
        completed
      </Button>
    </div>
  );
};

export default Filter;
