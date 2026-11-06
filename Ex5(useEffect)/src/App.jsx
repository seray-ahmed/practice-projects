import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("Her zaman calisir");
  });

  useEffect(() => {
    console.log("ilk rander edildiginde calisir");
  }, []);

  useEffect(() => {
    console.log("ilk render edildigind eve FIRST name degistiginde calisir");
  }, [firstName]);

  useEffect(() => {
    console.log("ilk render edildigind eve LAST name degistiginde calisir");
  }, [lastName]);

  return (
    <div>
      <div>
        <button onClick={() => setFirstName("Seyava")}>Adi degistir </button>
        <button onClick={() => setLastName("SYV")}>Soyad degistir </button>
      </div>
    </div>
  );
}

export default App;
