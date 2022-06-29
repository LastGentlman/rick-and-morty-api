import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './routes/Home.jsx'


function App() {

  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  )
}

export default App
