import React, { useState, useReducer } from 'react'
import './App.css'

const reducer = (state, action)=> {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const initialState = { count: 0 };

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div style={{ textAlign: 'center'}}>
      <h1>Counter using useState and useReducer</h1>

      <div>
        <h2>useState Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div>
        <h2>useReducer Counter</h2>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  )
}

export default App
