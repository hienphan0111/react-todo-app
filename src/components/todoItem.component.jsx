import styles from '../styles/TodoItem.module.css';
import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ todo, handleChange, deleTodo, updateTodo }) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const [editing, setEditing] = useState(false);
  const [updateTask, setUpdateTask] =useState(todo);
  
  const handleEditing = (e) => {
    setEditing(true);
  };

  const handleEditDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
      updateTodo(updateTask.title, todo.id);
    }
  };

  const handleOnchange = (e) => {
    setUpdateTask({
      ...updateTask,
      title: e.target.value,
    });
  };

  let viewMod = {};
  let editMod = {};
  if (editing) {
    viewMod.display = 'none'
  } else {
    editMod.display = 'none'
  }

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMod}>
        <input
          type="checkbox"
          onChange={() => handleChange(todo.id)}
          checked={todo.completed}
        />   
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
        <button onClick={handleEditing}>
          <AiFillEdit />
        </button>
        <button
          onClick={()=>deleTodo(todo.id)}
        >
          <FaTrash />
        </button>
      </div>
      <input
        type="text"
        value={updateTask.title}
        className={styles.textInput}
        style={editMod}
        onKeyDown={handleEditDone}
        onChange={handleOnchange}
      />
    </li>
  );
};

export default TodoItem;
