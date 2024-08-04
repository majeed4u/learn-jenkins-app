import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  function increaseCount() {
    setCount(count + 1)
  }
  function decreaseCount() {
    setCount(count - 1)
  }
  return (
    <div className="App space-y-4">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Jenkins on Udemy
        </a>
      </header>

      <div className=' flex items-center gap-x-4 justify-center'>
        <button className=' btn btn-sm btn-outline' onClick={decreaseCount}>Decrease</button>
        <p>
          Count: {count}
        </p>
        <button className=' btn btn-sm btn-outline' onClick={increaseCount}>Increase </button>
      </div>
      <p>
        Application version: 1
      </p>
    </div>
  );
}

export default App;
