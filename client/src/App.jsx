import * as React from 'react';
import { useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const currentYear = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <div className="App1">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
        Associations
        {currentYear}
      </footer>
    </div>
  );
}

export default App;
