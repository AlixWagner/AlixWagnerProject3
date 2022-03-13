import axios from 'axios';
import { useEffect, useState } from "react";
import { Route, Routes, Link, Outlet, UseParams } from 'react-router-dom';
// import firebase from "./firebase";
// import { getDatabase, ref, onValue, push } from "firebase/database"
import './App.css';

import GeneratorForm from './components/GeneratorForm.js';
import CharacterInfo from './components/CharacterInfo.js';
import Home from './components/Home';

function App() {
  return (
    <>
        <nav>
          <div className='wrapper'>
            <ul>
              <li>
                <Link className='navButton' to="/">Character Generator</Link>
              </li>
            </ul>
          </div>
        </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
