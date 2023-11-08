import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-light text-dark">
        <p className="intro mt-2">
          Peter Dommermuth <code class="text-dark">&#8212;</code> Comic Artist
        </p>
        <ul className="App-navbar nav nav-pills m-0 p-0">
          <li className="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="#">About Me</a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
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
        </header>
      <div className="App-body"></div>
      <footer className="App-footer bg-secondary py-3">
        <p className="copyright text-white">&copy; 2023 Peter Dommermuth</p>
      </footer>
    </div>
  );
}

export default App;
