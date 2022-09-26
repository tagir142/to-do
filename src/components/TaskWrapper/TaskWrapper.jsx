import { TaskText, Wrapper } from './TaskWrapper.styles';

export const TaskWrapper = ({ task }) => {
  console.log(task.text);
  return (
    <Wrapper>
      <TaskText>{task.text}</TaskText>
    </Wrapper>
  );
};
