import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRaiting from "./StarRaiting";

function Test() {
  const [movieRaiting, setMovieRaiting] = useState(0);

  return (
    <div>
      <StarRaiting
        color="blue"
        maxRaiting={10}
        onSetRaiting={setMovieRaiting}
      />
      <p>This movie was rated {movieRaiting} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRaiting
      maxRaiting={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRaiting size={24} color="red" className="test" defaultRaiting={3} />
    <Test /> */}
  </React.StrictMode>,
);
