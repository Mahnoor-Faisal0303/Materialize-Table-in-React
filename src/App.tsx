import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
       setTimeout(() => {
        setCount(count+1);
      }, 1000);  

  return (
    <p>count is {count}</p>
  )
}

export default App
