import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

import { v4 as uuidv4 } from 'uuid';

const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
  // const todosInit = [
  //   {
  //     id: 1,
  //     title: 'Setup development environment',
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'Develop website and add content',
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'Deploy to live server',
  //     completed: false,
  //   },
  // ];
  const todosInit = JSON.parse(localStorage.getItem('todos'))||[];
  console.log(todosInit);

  const [todos, setTodos] = useState(todosInit.map((todo) => ({ 
    ...todo, id: uuidv4()
  })));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const deleTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const updateTodo = (task, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = task;
        }
        return todo;
      })
    );
  };

  const addTodoItem = (task) => {
    const newTodo = {
      id: uuidv4(),
      title: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        handleChange,
        deleTodo,
        addTodoItem,
        updateTodo,
      }}>
      {children}
    </TodosContext.Provider>
  );
}

export const useTodosContext = () => useContext(TodosContext);
