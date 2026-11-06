import { useState } from "react";

import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("Seyava");
  // const [lastName, setLastName] = useState("Syv");
  // const [names, setNames] = useState(["Allo", "Malo", "Zalo"]);
  // console.log(names);
  // const [userInfo, setUserinfo] = useState({
  //   userName: "Syv",
  //   password: "1212",
  // });
  // const [show, setShow] = useState(true);

  const [count, setCount] = useState(0);

  // const handleChange = () => {
  //   setFirstName("BlaBla");
  // };

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      {/* //   <div>{firstName}</div>
    //   <div>
    //     <button onClick={handleChange}>Change</button>
    //   </div> */}
      {/* {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))} */}

      {/* {show ? (
        <div>
          {userInfo.userName} {userInfo.password}
        </div>
      ) : (
        <div>blabla</div>
      )} */}

      <div>{count}</div>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  );
}

export default App;
