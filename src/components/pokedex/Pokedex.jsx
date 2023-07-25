import React, { Component } from "react";
import Header from "../header/Header";
import Heropoke from "./Heropoke";
import Pokeinfo from "./Pokeinfo";


class Pokedex extends Component {
  render(){
    return (<>
      <Header /> 
      <Heropoke />
      <Pokeinfo />
    </>)
  }
}

export default Pokedex;