
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/about/about';
import Projects from './components/projects/Project';
function App() {
  return (
    <Router>
      < Nav />
      < Header />
      < About />
      < Projects />
      <Routes>

    </Routes>
    </Router>
  );
}

export default App;
