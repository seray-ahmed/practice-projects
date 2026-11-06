import "../css/Todo.css";
import React, { useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineEdit } from "react-icons/ai";
import type { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEditable(false);
  };

  return (
    <div className="todo-item">
      <div className="todo-text">
        {editable ? (
          <input
            className="todo-input"
            type="text"
            value={newTodo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewTodo(e.target.value)
            }
          />
        ) : (
          <div>{content}</div>
        )}
      </div>
      <div className="todo-icons">
        <IoIosRemoveCircleOutline
          onClick={handleRemoveTodo}
          className="icon remove-icon"
        />
        {editable ? (
          <FaCheck onClick={handleUpdateTodo} className="icon edit-icon" />
        ) : (
          <AiOutlineEdit
            onClick={() => setEditable(true)}
            className="icon edit-icon"
          />
        )}
      </div>
    </div>
  );
}

export default Todo;
