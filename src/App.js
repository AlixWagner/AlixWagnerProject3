
import { Route, Routes, Link } from 'react-router-dom';
// import firebase from "./firebase";
// import { getDatabase, ref, onValue, push } from "firebase/database"
import './App.css';
import logo from "./assets/d20-icon-34405.png"

import Home from './components/Home';
import Characters from './components/Characters';

function App() {
  return (
    <>
        <nav>
          <div className='wrapper'>
            <Link className='imgContainer' to="/"><img src={logo} alt="d20 (20 sided die) logo" /></Link>
            <ul>
              <li>
                <Link className='navButton' to="/">Character Generator</Link>
              </li>
              <li>
                <Link className='navButton primary' to="/characters">Saved Characters</Link>
              </li>
            </ul>
          </div>
        </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </>
  )
}

export default App;
