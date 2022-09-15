import { TaskText, TaskWrapper } from './Task.styles';

export const Task = ({ task }) => {
  return (
    <TaskWrapper>
      <TaskText>{task.text}</TaskText>
    </TaskWrapper>
  );
};
