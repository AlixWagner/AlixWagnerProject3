import axios from 'axios';
import { useState } from "react";
// import firebase from "./firebase";
// import { getDatabase, ref, onValue, push } from "firebase/database"
import './App.css';

import GeneratorForm from './components/GeneratorForm.js';

function App() {
  const [showForm, setShowForm] = useState(true);
  const [characterName, setCharacterName] = useState("")
  const [characterClass, setCharacterClass] = useState({})
  const [characterRace, setCharacterRace] = useState({})
  const [characterAlignment, setCharacterAlignment] = useState({})
  const [trigger, setTrigger] = useState(false)


  const apiBaseUrl = "https://www.dnd5eapi.co/api/"

  const apiCall = (parameter, chosen, setResult) => {
    const currentURL = apiBaseUrl + parameter + chosen

    axios({
      url: currentURL,
    }).then((returned) => {
      setResult(returned)
    });
  }

  // function to pass to the Form to:
    // Take  user input from GeneratorForm and store in state to pass to CharacterInfo
    // Hide GeneratorForm, Show Character Info
  const handleGeneratorFormSubmit = (event, name, characterClass, race, alignment) => {
    event.preventDefault();

    setCharacterName(name)
    apiCall("classes/", characterClass, setCharacterClass);
    apiCall("races/", race, setCharacterRace);
    apiCall("alignments/", alignment, setCharacterAlignment);
    setTrigger(!trigger)
    setShowForm(!showForm)
  }
  
  trigger 
  ? console.log(characterName, characterClass, characterRace, characterAlignment) 
  : console.log("not yet")
  

  return (
    <div className="App">
      <div>
        {
          showForm
            ? <GeneratorForm onSubmit={ handleGeneratorFormSubmit } />
            : null
        }
      </div>

    </div>
  );
}

export default App;
