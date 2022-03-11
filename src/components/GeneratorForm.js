import { useState, useEffect } from "react";
import axios from "axios";
import SelectInput from "./SelectInput.js";
import randomFromArray from "./randomFromArray.js";

const GeneratorForm = (props) => {
    // setState for each input:
    // NAME INPUT ---
    const [characterName, setCharacterName] = useState("");
    // setState for name randomizer:
    const [randomNameArray, setRandomNameArray] = useState([]);
    const [randomName, setRandomName] = useState("");
    // DROPDOWN MENUS ---
    // character class:
    const [characterClassArray, setCharacterClassArray] = useState([]);
    const [characterClass, setCharacterClass] = useState("placeholder");
    // character race:
    const [characterRaceArray, setCharacterRaceArray] = useState([]);
    const [characterRace, setCharacterRace] = useState("placeholder");
    // character alignment:
    const [alignmentArray, setAlignmentArray] = useState([]);
    const [characterAlignment, setCharacterAlignment] = useState("placeholder");

    // establish arrays from API:
    useEffect(() => {
        // random character names:
        axios({
            url: "https://api.fungenerators.com/name/generate",
            params: {
                api_key: "ZMLPKWMnz0eG28IhK5PuLAeF",
                category: "elf",
                limit: 100
            }
        }).then((returnedName) => {
            setRandomNameArray(returnedName.data.contents.names)
            setRandomName(returnedName.data.contents.names[5])
        });
        // character classes:
        axios({
            url: "https://www.dnd5eapi.co/api/classes",
        }).then((returned) => {
            setCharacterClassArray(returned.data.results);
        });
        // character races:
        axios({
            url: "https://www.dnd5eapi.co/api/races",
        }).then((returned) => {
            setCharacterRaceArray(returned.data.results);
        });
        // character alignments:
        axios({
            url: "https://www.dnd5eapi.co/api/alignments",
        }).then((returned) => {
            setAlignmentArray(returned.data.results)
        });
    // run calls only on load:
    }, [])

    
    // function to handle click on "randomize" button:
    const handleRandom = () => {
        randomFromArray(randomNameArray, setRandomName)
        setCharacterName(randomName)
        randomFromArray(characterClassArray, setCharacterClass)
        randomFromArray(characterRaceArray, setCharacterRace)
        randomFromArray(alignmentArray, setCharacterAlignment)
    }


    return (
        <form onSubmit={(e) => { props.onSubmit(e, characterName, characterClass, characterRace, characterAlignment) }}>
            <label htmlFor="characterName">Character Name</label>
            <input id="characterName" type="text" onChange={ function(event) { setCharacterName(event.target.value) }} value={ characterName }></input>

            <SelectInput 
                id="characterClass" 
                label="Class" 
                options={characterClassArray}
                userInput={ characterClass }
                setUserInput={ setCharacterClass }
            />

            <SelectInput
                id="characterRace"
                label="Race"
                options={characterRaceArray}
                userInput={characterRace}
                setUserInput={ setCharacterRace }
            />

            <SelectInput
                id="characterAlignment"
                label="Alignment"
                options={alignmentArray}
                userInput={characterAlignment}
                setUserInput={setCharacterAlignment}
            />




            <button type="button" onClick={ handleRandom } >
                Randomize
            </button>
            <button>
                Create Character
            </button>
        </form>
    )
}

export default GeneratorForm;