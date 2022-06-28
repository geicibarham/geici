
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/about/about';
function App() {
  return (
    <Router>
      < Nav />
      < Header />
      < About />
      <Routes>

    </Routes>
    </Router>
  );
}

export default App;
