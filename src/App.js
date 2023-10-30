import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-light text-dark">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code class="text-dark">src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link px-3 py-2 text-decoration-none text-white"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Learning React
        </a>
        <p className="intro mt-2">
          Peter Dommermuth <code class="text-dark">&#8212;</code> Comic Artist
        </p>
        <ul className="App-navbar m-0 p-0">
          <li>Home</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
      </header>
      <div className="App-body"></div>
      <footer className="App-footer bg-secondary py-3">
        <p className="copyright text-white">&copy; 2023 Peter Dommermuth</p>
      </footer>
    </div>
  );
}

export default App;
