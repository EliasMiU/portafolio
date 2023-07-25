import React, { Component } from "react"
import { Link } from "react-router-dom";
import './main-menu.css';

export default class MainMenu extends Component {
  render(){
    return (
      <nav className="main-menu">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/clock">Clock</Link>
        <Link to="/proyectos/marcador-basquet">Marcador Basquet</Link>
      </nav>
    )
  }
} 