import { ListWrapper, TasksList } from './List.styles';
import { Input } from '../Input/Input';
import { useEffect, useState } from 'react';
import { Task } from '../Task/Task';
import { nanoid } from 'nanoid';

export const List = () => {
  const [tasks, setTasks] = useState([]);

  const addTodo = (text) => {
    const id = nanoid();
    const newTask = { id, text };

    setTasks((prev) => [...prev, newTask]);
  };

  useEffect(() => {
    const json = JSON.stringify(tasks);
    if (tasks.length > 0) {
      localStorage.setItem('tasks', json);
    }
  }, [tasks]);

  useEffect(() => {
    const jsonParse = localStorage.getItem('tasks');
    const savedTasks = JSON.parse(jsonParse);
    if (savedTasks) {
      setTasks(savedTasks);
    }
  });

  return (
    <ListWrapper>
      <Input addTodo={addTodo} />
      <TasksList>
        {tasks.map((item) => (
          <Task task={item} key={item.id} />
        ))}
      </TasksList>
    </ListWrapper>
  );
};
