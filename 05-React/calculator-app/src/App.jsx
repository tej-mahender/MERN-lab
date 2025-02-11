import React from 'react'
import './App.css'
import { useState } from 'react'
import Addition from './components/addition/Addition'
import Subtract from './components/subtract/Subtract'
import Multiply from './components/multiply/Multiply'
import Division from './components/division/Division'

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Calculator</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        style={{ padding: "10px", margin: "5px" }}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        style={{ padding: "10px", margin: "5px" }}
      />

      <Addition a={Number(num1)} b={Number(num2)} />
      <Subtract a={Number(num1)} b={Number(num2)}/>
      <Multiply a={Number(num1)} b={Number(num2)} />
      <Division a={Number(num1)} b={Number(num2)} />
    </div>
  );
}

export default App;

