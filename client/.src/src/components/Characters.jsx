import style from './Characters.module.css'

export function Characters({characters}) {
    return (
        <>
        {characters.length > 0 ? (
          <div className={style.characters}>
            {characters?.map((character) => (
              <Character character={character} key={character.id} />
            ))}
          </div>
        ) : (
          <div className={style.error}>Characters not Found...</div>
        )}
      </>
    )
}

const Character = ({character}) => {
    return (
        <div className={style.character}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
        </div>
    )
}

// import { Component } from 'react';

// export default function Character(props) {
//     const {character, navigate} = props;
//     const {id, name, img} = character;
//     console.log(characters)
//     return (
//         <article>
//             <img src={img} alt={img} />
//             <span>{name}</span>
//             <button onClick={() => navigate(id)}></button>
//         </article>
//     )
// }