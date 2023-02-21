import TodoItem from "./todoItem.component";
import { useTodosContext } from "context/todoContext";

const TodosList = () => {
  const { todos } = useTodosContext();
  return (
    <ul>
      {
        todos.map((todo) =>
          <TodoItem
            key={todo.id}
            todo={todo}
          />)
      }
    </ul>
  );
};

export default TodosList;
