import {InputSearch, SearchBarBox} from './index.style'

export const SearchBar = ({ characterSearch, setCharacterSearch }) => {
    return (
        <SearchBarBox>
            <InputSearch 
                type={"text"}
                value={characterSearch}
                name={characterSearch}
                placeholder='Search for a "Rick & Morty" Character...'
                onChange={(e) => setCharacterSearch(e.target.value)}
            />
        </SearchBarBox>
    );
  };