const CharacterRaceInfo = (props) => {

    const currentRace = props.infoObject;

    console.log(currentRace)



    return (
        <section>
            <h2>RACE</h2>
            <h3>{currentRace.name}</h3>

            <h4>Proficiencies</h4>
            <ul>
                {
                    currentRace.starting_proficiencies[0] 
                        ? currentRace.starting_proficiencies.map((proficiency) => {
                            return ( <li key={proficiency.index}>{proficiency.name}</li> )
                        })
                        : <li className="noneAvailable">No Race-Based Starting Proficiencies</li>
                }
            </ul>
        </section>
    )
}

export default CharacterRaceInfo