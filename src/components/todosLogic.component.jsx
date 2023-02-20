import InputTodo from './inputTodo.component';
import TodosList from './todosList.component';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodosLogic = () => {
  const todosInit = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(todosInit.map((todo) => ({ 
    ...todo, id: uuidv4()
  })));

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

  console.log(todos);
  const addTodoItem = (task) => {
    const newTodo = {
      id: uuidv4(),
      title: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <div className='todo-logic-container'>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todos={todos}
        handleChange={handleChange}
        deleTodo={deleTodo}
        updateTodo={updateTodo}  
      />
    </div>
  );
};

export default TodosLogic;