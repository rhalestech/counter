import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  let a = {
    name: 'Tenns Balls',
    price: 10.99,
    inventory: 200
  }
  let b = {
    name: 'Notebook',
    price: 2.99,
    inventory: 150
  }
  let c = {
    name: 'Apples',
    price: 1.99,
    inventory: 100
  }
  return (
    <div className="App">
     <header className="App-header">
      <h1> Counter: {counter} </h1>
      <div className='button-container'>
          <button onClick={() => setCounter(0)}> RESET </button>
          <button onClick={() => setCounter(counter + a.price)}> {a.name}</button>
          <button onClick={() => setCounter(counter + b.price)}> {b.name}</button>
          <button onClick={() => setCounter(counter + c.price)}> {c.name}</button>
      </div>
     </header> 
    </div>
  )
}

export default App;
