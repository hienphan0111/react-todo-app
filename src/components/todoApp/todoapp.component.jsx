import Header from 'components/header.component';
import TodosLogic from 'components/todosLogic.component';
import Navbar from 'components/navBar.component';

const TodoApp = () => {
  const name = 'To do App';
  return (
    <div>
      <Navbar />
      <Header />
      <p>{name}</p>
      <TodosLogic />
    </div>
  );
};

export default TodoApp;
