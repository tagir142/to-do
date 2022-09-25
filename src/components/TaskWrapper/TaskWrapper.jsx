import { TaskText } from '../Task/Task.styles';
import { Wrapper } from './TaskWrapper.styles';

export const TaskWrapper = (task) => {
  return (
    <Wrapper>
      <TaskText>{task.text}</TaskText>
    </Wrapper>
  );
};
