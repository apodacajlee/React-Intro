import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm learn-ding!
        </p>
        <h1>This is a heading 1!</h1>
        <p>This is another paragraph!</p>
        <ul>
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
