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
  useEffect(() => {
   const intervalId=setInterval(() => {
     setCount(count=>count+1);
    }, 1000); 
    
    return () => clearInterval(intervalId);
  },[]);

  return (
    <>
    <p>count is {count}</p>
    <button onClick={() => setCount(0)}>Reset</button>
    </>
    )
}

export default App
