import TodoItem from "./todoItem.component";

const TodosList = ({ todos }) => {
  console.log(todos);
  return (
    <ul>
      {
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      }
    </ul>
  );
};

export default TodosList;
