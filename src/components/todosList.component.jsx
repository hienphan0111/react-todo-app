import TodoItem from "./todoItem.component";

const TodosList = ({ todos, handleChange, deleTodo, updateTodo }) => {
  console.log(todos);
  return (
    <ul>
      {
        todos.map((todo) =>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={handleChange}
            deleTodo={deleTodo}
            updateTodo={updateTodo}
          />)
      }
    </ul>
  );
};

export default TodosList;
