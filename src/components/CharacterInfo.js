import CharacterClassInfo from "./CharacterClassInfo";
import CharacterRaceInfo from "./CharacterRaceInfo";
import CharacterAlignment from "./CharacterAlignment";

const CharacterInfo = (props) => {


    return (
        <section>
            {props.loaded ?
                <>
                    <CharacterAlignment infoObject={props.alignment} name={props.name} />
                    <CharacterRaceInfo infoObject={props.race} />
                    <CharacterClassInfo infoObject={props.class} />
                </> :
                null
            }
        </section>
    )

}

export default CharacterInfo;