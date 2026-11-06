import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import "../App.css";

function ToDo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;
  const [editTable, setEditTable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const updateToDo = () => {
    const request = { id: id, content: newTodo };
    onUpdateTodo(request);
    setEditTable(false);
  };

  return (
    <div className="todo">
      <div>
        {editTable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            style={{ width: "380px" }}
            className="todo-input"
            type="text"
            placeholder="Enter ToDo "
          />
        ) : (
          content
        )}
      </div>
      <div>
        <MdDelete className="todo-icons delete-icon" onClick={removeTodo} />
        {editTable ? (
          <FaCheck className="todo-icons update-icons" onClick={updateToDo} />
        ) : (
          <MdEdit
            className="todo-icons update-icons"
            onClick={() => setEditTable(true)}
          />
        )}
      </div>
    </div>
  );
}

export default ToDo;
