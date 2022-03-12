import axios from 'axios';
import { useEffect, useState } from "react";
// import { Route, Routes, Link, Outlet, UseParams } from 'react-router-dom';
// import firebase from "./firebase";
// import { getDatabase, ref, onValue, push } from "firebase/database"
import './App.css';

import GeneratorForm from './components/GeneratorForm.js';
import CharacterInfo from './components/CharacterInfo.js'

function App() {
  const [showForm, setShowForm] = useState(true);
  const [showCharacterInfo, setShowCharacterInfo] = useState(false);
  const [characterName, setCharacterName] = useState("")
  const [characterClass, setCharacterClass] = useState({})
  const [characterRace, setCharacterRace] = useState({})
  const [characterAlignment, setCharacterAlignment] = useState({})

  useEffect(() => {
    characterName
      ? setShowCharacterInfo(true)
      : setShowCharacterInfo(false)
  }, [characterClass])

  const apiBaseUrl = "https://www.dnd5eapi.co/api/"

  const apiCall = (parameter, chosen, setResult) => {
    const currentURL = apiBaseUrl + parameter + chosen

    axios({
      url: currentURL,
    }).then((returned) => {
      setResult(returned.data)
    });
  }

  // function to pass to the Form to:
    // Take  user input from GeneratorForm and store in state to pass to CharacterInfo
    // Hide GeneratorForm, Show Character Info
  const handleGeneratorFormSubmit = (name, characterClass, race, alignment) => {
    setCharacterName(name)
    apiCall("classes/", characterClass, setCharacterClass);
    apiCall("races/", race, setCharacterRace);
    apiCall("alignments/", alignment, setCharacterAlignment);
  }
  

  return (
    <div className="App">
      <div>
        {
          showForm
            ? <GeneratorForm onSubmit={ handleGeneratorFormSubmit } />
            : null
        }
      </div>

      <div> 
        {
          showCharacterInfo 
            ? <CharacterInfo
              name={characterName}
              alignment={characterAlignment}
              class={characterClass}
              race={characterRace}
            />
            : null
        }
      </div>

    </div>
  );
}

export default App;
