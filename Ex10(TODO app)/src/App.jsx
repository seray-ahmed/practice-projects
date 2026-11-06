import { use, useState } from "react";

import "./App.css";
import ToDoCreate from "./components/ToDoCreate";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeToDo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });
    setTodos([...updatedTodos]);
  };

  console.log(todos);

  return (
    <div className="body">
      <div className="main">
        <ToDoCreate onCreateTodo={createTodo} />
        <ToDoList
          todos={todos}
          onRemoveTodo={removeToDo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
