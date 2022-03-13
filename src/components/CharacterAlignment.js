const CharacterAlignment = (props) => {

    const currentAlignment = props.infoObject;

    console.log(props.infoObject)

    return (
        <section className="basicCharacterSection">
            <div className="wrapper">
                <h2>{props.name}</h2>
                <div className="alignmentSection">
                    <h4>{currentAlignment.name}</h4>
                    <p>{currentAlignment.desc}</p>
                </div>
            </div>
        </section>
    )
}

export default CharacterAlignment;