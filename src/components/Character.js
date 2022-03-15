import { useParams } from "react-router-dom";

const Character = (props) => {
    const { characterKey } = useParams();

    return(<h1>Meep Meep</h1>)
}

export default Character