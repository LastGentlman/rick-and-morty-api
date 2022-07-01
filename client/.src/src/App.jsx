import './App.css';
// import {Outlet, Route, Routes} from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import Nav from './components/Nav';
// import Character from './pages/Characters';
// import CharacterDetail from './pages/CharactersDetail';
// import About from './components/About';
import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
// import { getCharacters } from './redux/actions';
import {SearchBar} from './components/SearchBar';
import {Characters} from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null)
  const [characterSearch, setCharacterSearch] = useState('')

  const getCharacters = useCallback(async () => {
    if (characterSearch !== '') {
      await axios
      .get(`http://localhost:3001/?query=${characterSearch}`)
      .then(({data}) => setCharacters(data.characters))
    } else {
      await axios
      .get(`http://localhost:3001/`)
      .then(({data}) => setCharacters(data.characters))
    }
  }, [characterSearch]);
  
  useEffect(() => {
    getCharacters()
  }, [getCharacters])
  
  return (
    <div>
      <SearchBar characters setCharacterSearch={setCharacterSearch} />
      <Characters characters={characters} />
    </div>
  );
}

export default App;

  // return (
  //   <>
  //   <Nav/>
  //   <Routes>
  //     <Route path="/" exact element={<Home/>} />
  //     <Route path="/" exact element={<SearchBar
  //       setCharacterSearch={setCharacterSearch}
  //     />} />
  //     <Route path="/characters" exact element={<Character
  //       characters={characters}
  //     />} />
  //     <Route path="/characters/:id" exact element={<CharacterDetail/>} />
  //     <Route path="/about" exact element={<About/>} />
  //   </Routes>
  //   <Outlet />
  //   </>
  // )