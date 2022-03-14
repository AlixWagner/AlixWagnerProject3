import { useEffect, useState } from "react";

function Characters(props) {
    
    const [currentCharacters, setCurrentCharacters] = useState([])
    
    useEffect(() => {
        setCurrentCharacters(props.savedCharacters)
    }, [props.savedCharacters])

    return (
        <div className="App">

            <header>
                <div className='wrapper'>
                    <h1>Saved Characters</h1>
                    <h2>Coming Soon</h2>
                    {
                        currentCharacters[0] 
                        ? currentCharacters.map((character) => {
                            return (
                                <li key={ character.key }>
                                    <h4>{ character.info.name }</h4>
                                    <p>{ character.info.alignment }</p>
                                    <p>{ character.info.race } { character.info.class }</p>
                                </li>
                            )
                        })
                        : null
                    }
                </div>
            </header>

        </div>
    );
}

export default Characters;