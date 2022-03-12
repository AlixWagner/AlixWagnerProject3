import CharacterClassInfo from "./CharacterClassInfo"
import CharacterRaceInfo from "./CharacterRaceInfo";

const CharacterInfo = (props) => {


    return (
        <section>
            {props.loaded ?
                <>
                    <h2>{ props.name }</h2>
                    <CharacterClassInfo infoObject={props.class} />
                    <CharacterRaceInfo infoObject={props.race} />
                </> :
                null
            }
        </section>
    )

}

export default CharacterInfo;