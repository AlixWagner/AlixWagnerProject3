import liFromArray from "./liFromArray";

const CharacterRaceInfo = (props) => {

    const currentRace = props.infoObject;

    console.log(currentRace)

    return (
        <section className="classSection">
            <div className="wrapper">
                <h3>{currentRace.name}</h3>
                <div className="basicRaceInfo">
                    <h5>Movement Speed</h5>
                    <p>{currentRace.speed}ft</p>
                </div>

                <div className="languages">
                    <h4>Languages</h4>
                    {
                        liFromArray(currentRace.languages)
                    }
                    <h5>Language Choices</h5>
                    {
                        currentRace.language_options.choose
                            ? <>
                                <p className="chooseOptionLabel">Choose {currentRace.language_options.choose} From Below:</p>
                                <ul className="choiceList">
                                    {
                                        liFromArray(currentRace.language_options.from)
                                    }
                                </ul>
                            </>
                            : <p className="noChoice" >No Language Choices for {currentRace.name} </p>
                    }
                </div>

                <div className="traits">
                    <h4>Traits</h4>
                    {
                        liFromArray(currentRace.traits)
                    }
                </div>

                <div className="proficiencies">
                    <h4>Proficiencies</h4>
                    <ul>
                        {
                            currentRace.starting_proficiencies[0]
                                ? currentRace.starting_proficiencies.map((proficiency) => {
                                    return (
                                        <li key={proficiency.index}>{proficiency.name}</li>
                                    )
                                })
                                : <p className="noChoice" >No Starting Proficiencies for {currentRace.name}</p>
                        }
                    </ul>
                    <h5>Proficiency Choices</h5>
                    {
                        currentRace.starting_proficiency_options.choose
                            ? <>
                                <p className="chooseOptionLabel">Choose {currentRace.starting_proficiency_options.choose} From Below:</p>
                                <ul className="choiceList">
                                    {
                                        currentRace.starting_proficiency_options.from.map((option) => {
                                            return (
                                                <li key={option.index}>{option.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </>
                            : <p className="noChoice" >No Proficiency Choices for {currentRace.name}</p>
                    }
                </div>

                <div>
                    <h4>Ability Bonuses</h4>
                    {
                        currentRace.ability_bonuses.map((ability) => {
                            return(
                                <li key={ability.ability_score.index}>
                                    <span className="bonusSpan">+{ability.bonus} </span>
                                    <span className="abilityType">{ability.ability_score.name} </span>
                                </li>
                            )
                        })
                    }
                    <h5>Ability Bonus Choices</h5>
                    {
                        currentRace.ability_bonus_options.choose
                            ? <>
                                <p className="chooseOptionLabel">Choose {currentRace.ability_bonus_options.choose} From Below:</p>
                                <ul className="choiceList">
                                    {
                                        currentRace.ability_bonus_options.from.map((option) => {
                                            return (
                                                <li key={option.ability_score.index}>
                                                    <span className="bonusSpan">+{option.bonus} </span>
                                                    <span className="abilityType">{option.ability_score.name} </span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </>
                            : <p className="noChoice" >No Ability Bonus Choices for {currentRace.name}</p>
                    }
                </div>
            </div>
        </section>
    )
}

export default CharacterRaceInfo

