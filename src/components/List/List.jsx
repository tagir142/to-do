import { ListWrapper, TasksList } from './List.styles';
import { Input } from '../Input/Input';
import { useEffect } from 'react';
import { Task } from '../Task/Task';
import { useSelector } from 'react-redux';

export const List = () => {
  const todos = useSelector((state) => state.todos);
  const todoList = todos.sortedList;

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('todos', JSON.stringify(todos));
  });
  /* useEffect(() => {
     const json = JSON.stringify(tasks);
     if (tasks.length > 0) {
       localStorage.setItem('tasks', json);
     }
   }, [tasks]);

   const [loaded, setLoaded] = useState(false);
   useEffect(() => {
     const jsonParse = localStorage.getItem('tasks');
     const savedTasks = JSON.parse(jsonParse);
     if (savedTasks) {
       setTasks(savedTasks);
       setLoaded(true);
     }
   }, [loaded]);
 */
  return (
    <ListWrapper>
      <Input />

      <TasksList>
        {todoList.map((item) => (
          <Task task={item} key={item.id} />
        ))}
      </TasksList>
    </ListWrapper>
  );
};
