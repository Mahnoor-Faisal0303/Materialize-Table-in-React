import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState<number>(0)
  //      setTimeout(() => {
  //       setCount(count+1);
  //     }, 1000); 
  
  
  //.............................2nd method........................................................................
  const [count, setCount] = useState<number>(0);
  const [paused, setPaused] = useState<string>("resume");
  useEffect(() => {
   const intervalId=setInterval(() => {
    if(paused==="resume")
     setCount(count=>count+1);
    }, 1000); 
    return () => clearInterval(intervalId);
  },[paused]);

  return (
    <>
    <h1 className="heading">Count is {count}</h1>
    <button id="resetbtn" onClick={() => setCount(0)}>Reset</button>
    <button id="resetbtn" onClick={() =>setPaused("pause")}>Pause</button>
    <button id="resetbtn" onClick={() =>setPaused("resume")}>Resume</button>
    </>
    )
}

export default App
