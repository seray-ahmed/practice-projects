//import { useState } from "react";
import "./App.css";

function App() {
  let names = ["Enes", "Fatma"];
  return (
    <div>
      {names.map((name, index) => (
        <div
          style={{
            backgroundColor: "orange",
            border: "1px solid black",
          }}
          key={index}
        >
          {name}
        </div>
      ))}
    </div>
  );
}

export default App;
