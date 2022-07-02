import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { SearchBar } from "./components/SearchBar";
import { Characters } from "./components/Characters";

import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState(null);
  const [characterSearch, setCharacterSearch] = useState("");

  const getCharacters = useCallback(async () => {
    if (characterSearch !== "") {
      await axios
        .get(`http://localhost:3001/?query=${characterSearch}`)
        .then(({ data }) => setCharacters(data.characters));
    } else {
      await axios
        .get("http://localhost:3001/")
        .then(({ data }) => setCharacters(data.characters));
    }
  }, [characterSearch]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <div>
      <SearchBar characters setCharacterSearch={setCharacterSearch} />
      <Characters characters={characters} />
    </div>
  );
};

export default App;