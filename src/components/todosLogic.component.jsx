import InputTodo from './inputTodo.component';
import TodosList from './todosList.component';

const TodosLogic = () => {
  const todos = [
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

  return (
    <div className='todo-logic-container'>
      <InputTodo />
      <TodosList todos={todos} />
    </div>
  );
};

export default TodosLogic;