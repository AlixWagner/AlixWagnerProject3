import axios from 'axios';
import { useEffect, useState } from "react";

import GeneratorForm from './GeneratorForm.js';
import CharacterInfo from './CharacterInfo.js'

function Home() {
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
    }, [characterName])

    const apiBaseUrl = "https://www.dnd5eapi.co/api/"

    const apiCall = (parameter, chosen, setResult) => {
        // establish URL based on form data:
        const currentURL = apiBaseUrl + parameter + chosen

        const axiosCallComplete = new Promise((resolve, reject) => {
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
            .then(() => { setLoaded(true) })
    }



    return (
        <div className="App">

            <header>
                <div className='wrapper'>
                    <h1>Character Generator</h1>
                </div>
            </header>

            <main>
                <section className='formSection'>
                    <GeneratorForm onSubmit={handleGeneratorFormSubmit} />
                </section>

                <>
                    {
                        showCharacterInfo
                            ? <CharacterInfo
                                name={characterName}
                                alignment={characterAlignment}
                                class={characterClass}
                                race={characterRace}
                                loaded={loaded}
                            />
                            : null
                    }
                </>
            </main>

        </div>
    );
}

export default Home;