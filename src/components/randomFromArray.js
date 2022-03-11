const randomFromArray = ( array, setChoice ) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomChoice = array[randomIndex];
    if (randomChoice.index) {
        setChoice(randomChoice.index)
    } else {
        setChoice(randomChoice)
    }
}

export default randomFromArray;