import liFromArray from "./liFromArray";

const CharacterClassInfo = (props) => {

    const currentClass = props.infoObject;
    
    console.log(currentClass)

    
    return (
        <section className="classSection">
            <div className="wrapper">
                <h3>{currentClass.name}</h3>
                <div className="basicClassInfo">
                    <p>Hit Dice: D{currentClass.hit_die}</p>

                    <h4>Saving Throws</h4>
                    <ul>
                        {
                            liFromArray(currentClass.saving_throws)
                        }
                    </ul>
                </div>

                <div className="proficiencies">
                        <h4>Proficiencies</h4>
                    <ul>
                        {
                            liFromArray(currentClass.proficiencies)
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
                                            liFromArray(choice.from)
                                        }
                                    </ul>
                                </>
                            )
                        })
                    }
                </div>
                
                <div className="spellcasting">
                    <h4>Spellcasting</h4>
                    <ul>
                        {
                            currentClass.spellcasting.info.map((each) => {
                                if (each.name === "Cantrips" || each.name === "Spellcasting Ability") {
                                    return (
                                        <li>
                                            <h5>{each.name}</h5>
                                            <ul>
                                                {
                                                    each.desc.map((description) => {
                                                        return (
                                                            <p>{description}</p>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                } else {
                                    return null
                                }
                            })
                        }
                    </ul>
                </div>

                <div className="classEquipment">
                    <h4>Starting Equipment</h4>
                    <ul>
                        {
                            currentClass.starting_equipment.map((equipment) => {
                                return (
                                    <li key={ equipment.equipment.index }>
                                        <span className="quantity">{ equipment.quantity }x </span>
                                        { equipment.equipment.name }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <h5>Equipment Choices</h5>
                    <p>ALIX WAGNER YOU NEED TO FIX THIS STILL</p>
                    {
                        currentClass.starting_equipment_options.map((choice) => {
                            return (
                                <>
                                    <p>Choose {choice.choose} From Below:</p>
                                    <ul>
                                        {/* THIS INFO IS FUCKED  */}
                                        {/* Needs to be parsed more intricately because 
                                        FOR EXAMPLE: Rangers can choose between 2x shortswords or the option of 2 martial weapons of their choice THEREFORE sometimes option.equipment and sometimes option.equipment_category */}
                                        {/* {
                                            choice.from.map((option) => {
                                                return (
                                                    <li key={option.equipment.index}>
                                                        <span className="quantity">{option.quantity}x </span>
                                                        {option.equipment.name}
                                                    </li>
                                                )
                                            })
                                        } */}
                                    </ul>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default CharacterClassInfo