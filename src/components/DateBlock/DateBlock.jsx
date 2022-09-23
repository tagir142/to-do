import { Date, Block } from './DateBlock.styles';

export const DateBlock = (task) => {
  return (
    <Block>
      <Date>{task.date}</Date>
    </Block>
  );
};
