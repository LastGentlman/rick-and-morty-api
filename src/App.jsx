import './App.css';
import {Outlet, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Nav from './components/Nav';
import Character from './pages/Characters';
import CharacterDetail from './pages/CharactersDetail';
import About from './components/About';
import { useSelector } from 'react-redux';

// const loading = useSelector(state => state.app.loading)  //loading bar effect
function App() {
  console.log(history)
  return (
    <>
{/* {loading && <div className="progress-box"> //Rendering loading bar effect
              <div className="progress-bar">
                <div className="progress-bar-value"></div>
              </div>
            </div>
} */}
    <Nav/>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/characters" exact element={<Character/>} />
      <Route path="/characters/:id" exact element={<CharacterDetail/>} />
      <Route path="/about" exact element={<About/>} />
    </Routes>
    <Outlet />
    </>
  )
}

export default App;