import {
  ADD_TASK,
  CHANGE_TASK,
  FILTER_ALL,
  FILTER_IS_NOT_COMPLETED,
  FILTER_IS_COMPLETED,
  REMOVE_TASK,
  REMOVE_ALL_TASKS
} from './types';
import { nanoid } from 'nanoid';

const getInitialState = () => {
  const localTodo = JSON.parse(localStorage.getItem('todos'));
  if (!localTodo) {
    return {
      todoList: [],
      sortedList: [],
      flag: FILTER_ALL
    };
  }
  return localTodo;
};
const todoFilter = (flag, arr) => {
  switch (flag) {
    case 'FILTER_ALL':
      return arr;
    case 'FILTER_IS_COMPLETED':
      return arr.filter((task) => task.isCompleted);
    case 'FILTER_IS_NOT_COMPLETED':
      return arr.filter((task) => !task.isCompleted);
    default:
      return arr;
  }
};
export const todoReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case ADD_TASK: {
      const todo = {
        id: nanoid(),
        date: new Date().toLocaleString(),
        text: action.text,
        isCompleted: false,
        change: false
      };
      const addValue = [todo, ...state.todoList];
      return {
        ...state,
        todoList: addValue,
        sortedList: todoFilter(state.flag, addValue)
      };
    }
    case REMOVE_ALL_TASKS:
      return {
        ...state,
        todoList: [],
        sortedList: []
      };
    case REMOVE_TASK:
      // eslint-disable-next-line no-case-declarations
      const removeTaskValue = state.todoList.filter(
        (task) => task.id !== action.id
      );
      return {
        ...state,
        todoList: removeTaskValue,
        sortedList: todoFilter(state.flag, removeTaskValue)
      };
    case CHANGE_TASK:
      // eslint-disable-next-line no-case-declarations
      const changeTaskValue = state.todoList.map((task) => {
        if (task.id === action.id && action.text) {
          return {
            ...task,
            [action.value]: !task[action.value],
            text: action.text
          };
        } else if (task.id === action.id) {
          return { ...task, [action.value]: !task[action.value] };
        } else {
          return { ...task };
        }
      });
      return {
        ...state,
        todoList: changeTaskValue,
        sortedList: todoFilter(state.flag, changeTaskValue)
      };

    case FILTER_ALL:
      return {
        ...state,
        sortedList: state.todoList,
        flag: action.type
      };

    case FILTER_IS_COMPLETED:
      return {
        ...state,
        sortedList: state.todoList.filter((task) => task.isCompleted),
        flag: action.type
      };

    case FILTER_IS_NOT_COMPLETED:
      return {
        ...state,
        sortedList: state.todoList.filter((task) => !task.isCompleted),
        flag: action.type
      };
    default:
      return state;
  }
};
