import logo from './logo.svg';
import './App.css';
import { useCallback, useMemo, useState } from 'react';

function App(props) {
  const [counter, setCounter] = useState(0);
  const currentYear = useMemo(() => {
    console.log(counter);
    return new Date().getFullYear()
  }, [counter]);

  const handleClick = useCallback(e => {
    setCounter(counter + 1);
    console.log(e.type);
  }, [props.counter]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Send</button>
      </header>
      <footer>Associations {currentYear}</footer>
    </div>
  );
}

export default App;
