import {CharactersBox, CharacterCard, Error, Picture, Name} from './index.style.js'

export const Characters = ({ characters }) => {
  console.log('hello', {characters})
    return (
      <>
        {characters ? (
            <CharactersBox>
                {characters?.map((character) => (
                    <Character character={character} key={character.id} />
                ))}
            </CharactersBox>
        ) : (
          <Error>Characters Not Found...</Error>
        )}
      </>
    );
  };
  
  const Character = ({ character }) => {
    return (
        <CharacterCard>
            <Picture src={character.image} alt={character.name} />
            <Name>{character.name}</Name>
        </CharacterCard>
    )
};