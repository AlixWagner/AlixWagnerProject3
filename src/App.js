import axios from 'axios';
import { useEffect, useState } from "react";
// import { Route, Routes, Link, Outlet, UseParams } from 'react-router-dom';
// import firebase from "./firebase";
// import { getDatabase, ref, onValue, push } from "firebase/database"
import './App.css';

import GeneratorForm from './components/GeneratorForm.js';
import CharacterInfo from './components/CharacterInfo.js'

function App() {
  const [showCharacterInfo, setShowCharacterInfo] = useState(false);
  const [characterName, setCharacterName] = useState("")
  const [characterClass, setCharacterClass] = useState({})
  const [characterRace, setCharacterRace] = useState({})
  const [characterAlignment, setCharacterAlignment] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    characterName
      ? setShowCharacterInfo(true)
      : setShowCharacterInfo(false)
  }, [ characterName ])

  // useEffect(() => {
  //   showCharacterInfo
  //     ? setShowForm(false)
  //     : setShowForm(true);
  // }, [ showCharacterInfo ])

  const apiBaseUrl = "https://www.dnd5eapi.co/api/"

  const apiCall = (parameter, chosen, setResult) => {
    // establish URL based on form data:
    const currentURL = apiBaseUrl + parameter + chosen

    const axiosCallComplete = new Promise ((resolve, reject) => {
      axios({
        url: currentURL,
      }).then((returned) => {
        // use returned data from API call to set State:
        setResult(returned.data);
        resolve();
      }).catch((error) => {
        alert(error);
        reject();
      })
    })
    // return promise that axios call was complete
    return axiosCallComplete;
  }

  // function to pass to the Form to:
    // Take  user input from GeneratorForm and store in state to pass to CharacterInfo
    // Hide GeneratorForm, Show Character Info
  const handleGeneratorFormSubmit = (name, characterClass, race, alignment) => {
    // make sure that no State changes occur during mount/dismount - stop CharacterInfo from accessing State:
    setLoaded(false);
    setCharacterName(name)
    // set variables for returned "promises":
    const classPromise = apiCall("classes/", characterClass, setCharacterClass);
    const racePromise = apiCall("races/", race, setCharacterRace);
    const alignmentPromise = apiCall("alignments/", alignment, setCharacterAlignment);
    // collect the "promise" that API call was complete from all 3 calls:
    Promise.all([classPromise, racePromise, alignmentPromise])
    // ensure that all 3 API calls have returned before continuing:
      .then(() => {setLoaded(true)})
  }
  

  return (
    <div className="App">
      <div>
        <GeneratorForm onSubmit={ handleGeneratorFormSubmit } />
      </div>

      <div> 
        {
          showCharacterInfo 
            ? <CharacterInfo
              name={characterName}
              alignment={characterAlignment}
              class={characterClass}
              race={characterRace}
              loaded={ loaded }
              />
            : null
        }
      </div>

    </div>
  );
}

export default App;
