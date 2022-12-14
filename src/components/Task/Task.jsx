import { TaskBlock, DeleteButton } from './Task.styles';

import { DateBlock } from '../DateBlock/DateBlock';
import { TaskWrapper } from '../TaskWrapper/TaskWrapper';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../store/todo/actions';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  /* const [text, setText] = useState(task.text);
  const dispatch = useDispatch();
  const changeValueTodo = (id, value, text) => {
    dispatch(changeTask(id, value, text));
  };
  const changeTodo = () => {
    if (text.trim().length) {
      changeValueTodo(task.id, 'change', text);
      setText('');
    }
  }; */

  return (
    <TaskBlock>
      <DateBlock task={task}>{}</DateBlock>
      <TaskWrapper task={task}> </TaskWrapper>
      <DeleteButton onClick={() => dispatch(removeTask(task.id))}>
        {' '}
        Удалить задачу{' '}
      </DeleteButton>
    </TaskBlock>
  );
};
