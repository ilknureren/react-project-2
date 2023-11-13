import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-light text-dark">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="intro mt-2">
          Peter Dommermuth <code class="text-dark">&#8212;</code> Comic Artist
        </p>
        <ul className="App-navbar nav nav-pills ms-5 p-0">
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
        </header>
      <div className="App-body"></div>
      <footer className="App-footer bg-secondary py-3">
        <p className="copyright text-white">&copy; 2023 Peter Dommermuth</p>
      </footer>
    </div>
  );
}

export default App;
