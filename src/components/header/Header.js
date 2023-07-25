import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props){
      super(props);
      this.state = {
        switchmenu: false,
      }
    }

    /**
     * Se cambia el estado para poder usar toofleBtnMenu
     */
    setBtnMenu = () => {
      this.setState({
        switchmenu: !this.state.switchmenu,
      });
      this.activeSuperMenu();
    }

    /**
     * Se le asigna las clases a los elementos seleccinados
     */
    
    activeSuperMenu = () => {
      let superMenu = document.querySelector('.super-menu');
      let header = document.querySelector('.header');
      let headerCol = document.querySelector('.header .col-12');
      superMenu.classList.toggle('active');
      if(headerCol.classList.contains('col-md-6')){
        headerCol.classList.replace('col-md-6', 'col-md-8')
      } else if (headerCol.classList.contains('col-md-8')){
        headerCol.classList.replace('col-md-8', 'col-md-6');
      }
      headerCol.classList.toggle('offset-md-4');
      header.classList.toggle('active');
    }
    /**
     * Se cambia la opcion active dependiendod el estado del elemento
     * 
     * @returns 
     */
    toggleBtnMenu = () => {
      return this.state.switchmenu ? ' active' : "";
    }
    
    render(){
      return <header className="header">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-md-6 content">
                      <div className="navbar-brand" href="#">
                          <span>D</span>
                          <span>M</span>
                      </div>
                      {
                        /*

                        <nav className="navbar">

                            <ul className='main-menu'>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="pokedex">Pokedex</Link></li>
                            </ul>
                            
                            <div className="btn-menu">
                                <span></span>
                                <span></span>
                            </div>
                        </nav>
                        */

                      }
                  </div>
              </div>
          </div>
      </header>
    }

}