import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = Home
      break
    case "/about":
      Component = About
      break
    case "/contact":
      Component = Contact
      break
  }
  
  return (
    <>
      <div className="App">
        <NavBar />
        <Component />
        <Footer />
      </div>
    </>
  );
}

export default App;
