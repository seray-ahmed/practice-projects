import { useState } from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";
import useCopyToClipboard from "./hooks/useCopyToClipboard";

function App() {
  // const { count, increase, decrease } = useCounter();

  // const { open, change } = useToggle();

  const [copied, copy] = useCopyToClipboard("Sapshiki Emeve");

  return (
    <div>
      {/* <div>{count}</div>
      <button onClick={increase}>Plus</button>
      <button onClick={decrease}>Minus</button> */}
      {/* {open && (
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "pink",
          }}
        >
          Box
        </div>
      )}
      <button onClick={change}>{open ? "Gizle" : "Goster"}</button> */}
      {copied && "kopyalandi"}
      <button onClick={copy}> copy</button>
    </div>
  );
}

export default App;
