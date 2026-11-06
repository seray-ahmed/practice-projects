import { useState } from "react";
import "./App.css";

function App() {
  const [exam1, setExam1] = useState("");
  const [exam2, setExam2] = useState("");

  const sum = () => {
    const sum = exam1 + exam2;
    return sum;
  };

  const print = (result) => {
    console.log("AVG: " + result);
  };

  const avrg = () => {
    const avg = sum() / 2;
    print(avg);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={exam1}
          onChange={(e) => setExam1(Number(e.target.value))}
        ></input>
      </div>

      <div>
        <input
          type="number"
          value={exam2}
          onChange={(e) => setExam2(Number(e.target.value))}
        ></input>
      </div>
      <div>
        <button onClick={avrg}>AVG</button>
      </div>
    </div>
  );
}

export default App;
