import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [color, setColor] = useState(0);
  function increment()
  {
     setColor(color + 1);
  }
  function decrement()
  {
    return setColor(color -1);
  }
  return (
    <div className="App">
      <div>{color}</div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
