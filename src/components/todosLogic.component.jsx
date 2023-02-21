import InputTodo from './inputTodo.component';
import TodosList from './todosList.component';
import { useState } from 'react';

import { TodosProvider } from 'context/todoContext';

const TodosLogic = () => {
  
  return (
    <TodosProvider>
      <div className='todo-logic-container'>
        <InputTodo />
        <TodosList />
      </div>
    </TodosProvider>
  );
};

export default TodosLogic;