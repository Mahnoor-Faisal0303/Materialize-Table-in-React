import React, { useState, useEffect } from "react";

import "./App.css";

interface AppPropsType {}

const App: React.FC<AppPropsType> = (props) => {
  
  const [count, setCount] = useState<number>(0);
  const [paused, setPaused] = useState<string>("resume");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (paused === "resume") {
        setCount((count) => count + 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [paused]);

  return (
    <React.Fragment>
      <h1 className="heading">Count is {count}</h1>
      <button id="resetbtn" onClick={() => setCount(0)}>
        Reset
      </button>
      <button id="resetbtn" onClick={() => setPaused("pause")}>
        Pause
      </button>
      <button id="resetbtn" onClick={() => setPaused("resume")}>
        Resume
      </button>
    </React.Fragment>
  );
};

export default App;
