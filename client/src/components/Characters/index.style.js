import styled from 'styled-components'

export const CharactersBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-row-gap: 30px;
    justify-items: center;
    justify-content: space-evenly;
    padding-bottom: 25px;
`;

export const CharacterCard = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightblue;
    width: 200px;
    padding: 15px;
    border-radius: 10px;
    gap: 15px;
    box-shadow: 0px 4px 4px 0px rgba(97, 117, 157, 0.33);

    `;

export const Picture = styled.img`
    width: 150px;
    border-radius: 10px;
`;

export const Name = styled.p`
    width: 150px;
    background-color: white;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
`;
  
export const Error = styled.div`
      width: 100vw;
      font-weight: bold;
      text-align: center;
`;