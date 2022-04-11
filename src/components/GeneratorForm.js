import { useState, useEffect } from "react";
import axios from "axios";
import { getDatabase, ref, get } from "firebase/database";
import SelectInput from "./SelectInput.js";
import randomFromArray from "./randomFromArray.js";
import { secondary } from "../firebase.js";

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


    const database = getDatabase(secondary)
    // Instead of referencing the whole database, we are now reference one specific node.
    const userRef = ref(database)

    // establish arrays from API:
    useEffect(() => {
        // random character names:
        // axios({
        //     url: "https://api.fungenerators.com/name/generate",
        //     params: {
        //         api_key: "ZMLPKWMnz0eG28IhK5PuLAeF",
        //         category: "elf",
        //         limit: 200
        //     }
        // }).then((returnedName) => {
        //     setRandomNameArray(returnedName.data.contents.names)
        //     setRandomName(returnedName.data.contents.names[5])
        // }).catch((error) => {
        //     alert(error)
        // })
        get(userRef).then((data) => {
            const newData = data.val()
            const newState = [];
            for (let key in newData) {
                // newState.push({ key: key, info: data[key] })
                newState.push(newData[key])
            };
            const nameList = newState[0]
            setRandomNameArray(nameList)
            setRandomName(nameList[5])
        })
        // character classes:
        axios({
            url: "https://www.dnd5eapi.co/api/classes",
        }).then((returned) => {
            setCharacterClassArray(returned.data.results);
        }).catch((error) => {
            alert(error)
        })
        // character races:
        axios({
            url: "https://www.dnd5eapi.co/api/races",
        }).then((returned) => {
            setCharacterRaceArray(returned.data.results);
        }).catch((error) => {
            alert(error)
        })
        // character alignments:
        axios({
            url: "https://www.dnd5eapi.co/api/alignments",
        }).then((returned) => {
            setAlignmentArray(returned.data.results)
        }).catch((error) => {
            alert(error)
        })

        return () => {
            axios.isCancel()
        }
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

    const handleSubmit = (e) => {
        e.preventDefault();

        let currentName = characterName;
        let currentClass = characterClass;
        let currentRace = characterRace;
        let currentAlignment = characterAlignment;

        if (!characterName) {
            currentName = randomFromArray(randomNameArray)
            setCharacterName(currentName)
        }
        if (characterClass === "placeholder") {
            currentClass = randomFromArray(characterClassArray)
            setCharacterClass(currentClass)
        }
        if (characterRace === "placeholder") {
            currentRace = randomFromArray(characterRaceArray)
            setCharacterRace(currentRace)
        }
        if (characterAlignment === "placeholder") {
            currentAlignment = randomFromArray(alignmentArray)
            setCharacterAlignment(currentAlignment)
        }

        props.onSubmit(currentName, currentClass, currentRace, currentAlignment)

    }

    // onSubmit={(e) => { props.onSubmit(e, characterName, characterClass, characterRace, characterAlignment) }}

    return (
        randomNameArray[0] 
            ? <div className="wrapper">
                <form>
                    <div className="formSection firstLine">
                        <div className="inputContainer">
                            <label htmlFor="characterName">Character Name</label>
                            <input id="characterName" type="text" onChange={function (event) { setCharacterName(event.target.value) }} value={characterName}></input>
                        </div>

                        <SelectInput
                            id="characterAlignment"
                            label="Alignment"
                            options={alignmentArray}
                            userInput={characterAlignment}
                            setUserInput={setCharacterAlignment}
                        />
                    </div>

                    <div className="formSection secondLine">
                        <SelectInput
                            id="characterClass"
                            label="Class"
                            options={characterClassArray}
                            userInput={characterClass}
                            setUserInput={setCharacterClass}
                        />

                        <SelectInput
                            id="characterRace"
                            label="Race"
                            options={characterRaceArray}
                            userInput={characterRace}
                            setUserInput={setCharacterRace}
                        />
                    </div>


                    <div className="buttonContainer">
                        <button type="button" onClick={handleRandom} >
                            Randomize
                        </button>

                        <button className="primary" onClick={handleSubmit}>
                            Create Character
                        </button>
                    </div>
                </form>
            </div>
            : <div className="loading">
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
    )
}

export default GeneratorForm;