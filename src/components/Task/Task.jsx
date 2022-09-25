import { TaskText, TaskWrapper } from './Task.styles';
import { DateBlock } from '../DateBlock/DateBlock';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

export const Task = ({ task }) => {
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
    <TaskWrapper>
      <DateBlock date={task.date}>{}</DateBlock>
      <TaskText>{task.text}</TaskText>
    </TaskWrapper>
  );
};
