import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'; // useNavigate es un hook que sustituye a useHistory
import {getCharsFromApi} from '../redux/actions';
import Character from '../components/Character';

export default function Characters(props) {
    let history = useNavigate();

    const {characters} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => { // en componente de clase se usa componentDidMount()
        dispatch(getCharsFromApi())
    });

    function handleNavigate(id) {
        history.push(`/characters/${id}`);
    }
    
    return (
        <main>
            {characters.map((character) => {
                <Character 
                    key={character.id} 
                    character={character}
                    navigate={handleNavigate}
                />
            })}
        </main>
    )
}