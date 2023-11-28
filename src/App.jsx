import React, { useState } from "react";
import "./App.css";
import UseState from "./components/UseState";
import UseState2 from "./components/UseState2";
import UseState3 from "./components/UseState3";
import UseState4 from "./components/UseState4";
import UseState5 from "./components/UseState5";
import UseContext from "./components/UseContext";
import Task from "./components/Task";

export const ToggleTheme = React.createContext();

function App() {
  const [state, setState] = useState(true);
  const handleToggle = () => {
    setState((state) => !state);
  };
  return (
    <>
      <p>PROGRESSION 1 | UPDATE STATE USING useState</p>
      <UseState />
      <p>PROGRESSION 2 | MULTIPLE STATE</p>
      <UseState2 />
      <p>PROGRESSION 3 | USE OBJECT STATE</p>
      <UseState3 />
      <p>PROGRESSION 4 | INITIALIZE STATE FROM FUNCTION</p>
      <UseState4 />
      <p>PROGRESSION 5 | useEffect</p>
      <UseState5 />
      <p>PROGRESSION 6 | useContext</p>
      <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle}>Toggle</button>
        <UseContext />
      </ToggleTheme.Provider>
      <p>Task</p>
      <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle}>Toggle</button>
        <Task/>
      </ToggleTheme.Provider>
    </>
  );
}

export default App;
