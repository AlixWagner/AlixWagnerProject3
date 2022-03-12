const CharacterClassInfo = (props) => {

    const currentClass = props.infoObject;
    

    
    return (
        <section>
            <h2>CLASS</h2>
            <h3>{currentClass.name}</h3>

            <p>Hit Dice: D{currentClass.hit_die}</p>
            <h4>Proficiencies</h4>
            <ul>
                {
                    currentClass.proficiencies.map((proficiency) => {
                        return (
                            <li key={ proficiency.index }>{ proficiency.name }</li>
                        )
                    })
                }
            </ul>
            <h5>Proficiency Choices</h5>
            {
                currentClass.proficiency_choices.map((choice) => {
                    return (
                        <>
                            <p>Choose {choice.choose} From Below:</p>
                            <ul>
                                {
                                    choice.from.map((option) => {
                                        return (
                                            <li key={ option.index }>{option.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </>
                    )
                })
            }
        </section>
    )
}

export default CharacterClassInfo