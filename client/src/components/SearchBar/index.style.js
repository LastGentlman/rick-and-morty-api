import styled from 'styled-components'

export const SearchBarBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 35px 0;

`;

export const InputSearch = styled.input`
    padding: 10px;
    background-color: lightblue;
    border: none;
    width: 50%;
    max-width: 500px;
    border-radius: 5px;

    &::placeholder {
        font-size: 15px;
        font-weight: bold;
    }
`;