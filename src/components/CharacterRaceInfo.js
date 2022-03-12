const CharacterRaceInfo = (props) => {

    const currentRace = props.infoObject;

    console.log(currentRace)



    return (
        <section>
            <h2>RACE</h2>
            <h3>{ currentRace.name }</h3>

            <h4>Proficiencies</h4>
            <ul>
                {
                    currentRace.starting_proficiencies[0]
                        ? currentRace.starting_proficiencies.map((proficiency) => {
                            return (
                                <li key={proficiency.index}>{proficiency.name}</li>
                            )
                        })
                        : <p>No Starting Proficiencies for {currentRace.name}</p>
                }
            </ul>
            <h5>Proficiency Choices</h5>
            {
                currentRace.starting_proficiency_options.choose
                    ? <>
                        <p>Choose { currentRace.starting_proficiency_options.choose } From Below:</p>
                        <ul>
                            {
                                currentRace.starting_proficiency_options.from.map((option) => {
                                    return (
                                        <li key={option.index}>{option.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </>
                    : <p>No Proficiency Choices for { currentRace.name } </p>
            }
        </section>
    )
}

export default CharacterRaceInfo

