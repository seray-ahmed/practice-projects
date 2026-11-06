import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import type { TodoType } from "../types/Types";

function TodoCreate() {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Enter Todo");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 99999999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        placeholder="Enter ToDo... "
        className="todo-input"
        type="text"
      />
      <button onClick={handleCreateTodo} className="todo-create-button">
        Create
      </button>
    </div>
  );
}

export default TodoCreate;
