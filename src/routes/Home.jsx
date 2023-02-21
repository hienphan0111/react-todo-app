import Header from 'components/header.component';
import TodosLogic from 'components/todosLogic.component';

const Home = () => {
  return (
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  );
};

export default Home;