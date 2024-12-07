import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  return (
    <div className="App">
      <h1>Counter App</h1>
     <h4>Count: {count}</h4>
     <button onClick={()=>setCount((val)=> val+1)}>Increament</button>
     <button onClick={()=>setCount((val)=> val-1)}>Decreament</button>
    </div>
  );
}

export default App;
