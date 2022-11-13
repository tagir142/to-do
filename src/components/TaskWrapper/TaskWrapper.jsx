import { TaskText, Wrapper } from './TaskWrapper.styles';

export const TaskWrapper = ({ task }) => {
  return (
    <Wrapper>
      <TaskText>{task.text}</TaskText>
    </Wrapper>
  );
};
