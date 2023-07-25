import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home/Home';
import Pokedex from './components/pokedex/Pokedex';
import Masinfo from './components/mas-info/Masinfo';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='pokedex' element={ <Pokedex /> }></Route>
          <Route path='masinfo' element={ <Masinfo/>}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
