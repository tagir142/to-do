import {
  AddButton,
  InputBlock,
  StyledInput,
  DeleteAllButton
} from './Input.styles';
import { useState } from 'react';
import { addTask, removeAllTask } from '../../store/todo/actions';
import { useDispatch } from 'react-redux';

export const Input = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTodoInList = () => {
    if (text.trim().length) {
      dispatch(addTask(text));
      setText('');
    }
  };

  const deleteAll = () => {
    dispatch(removeAllTask());
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      addTodoInList();
    }
  };

  return (
    <InputBlock>
      <StyledInput
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <AddButton onClick={addTodoInList}>
        <h3>+</h3>
      </AddButton>
      <DeleteAllButton onClick={deleteAll}>
        <h3>Удалить всё</h3>
      </DeleteAllButton>
    </InputBlock>
  );
};
