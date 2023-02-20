import Header from 'components/header.component';
import TodosLogic from 'components/todosLogic.component';
import Navbar from 'components/navBar.component';
import './todoapp.styles.scss';

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Navbar />
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
};

export default TodoApp;
