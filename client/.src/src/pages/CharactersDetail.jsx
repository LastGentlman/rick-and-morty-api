import axios from "axios";
import { useState } from "react"
import { useParams } from "react-router-dom"

function CharacterDetail(props) {
    const {id} = useParams();
    const [state, setState] = useState({});

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => {
                setState(res.data);
            })
    }, [id]);

    return (
        <>
            <h1>Character Detail</h1>
        </>
    )
}

export default CharacterDetail;