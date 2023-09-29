import React, { Component } from 'react';
import dev from "../../assets/img/dev-computer.jpg";
import develop from "../../assets/img/software-developer.jpg";
import Contact from '../contact/Contact';
import { Link } from 'react-router-dom';



export default class Hero extends Component {   
    render(){
        return(
            <section className="hero">
                <div className="container">
                    <div className='row'>
                        <div className='col-12 col-md-9 position-relative'>
                            <span className="greeting-hero">Hola, soy el Desarrollador Web.</span>
                            <h1 className='titulo-hero'>
                                <span className="name">Daniel E.</span>
                                <span className="name">Millan Urbano</span>
                            </h1>
                            <div className="row">
                                <div className="col-12 col-md-8">
                                    <p className="intro-hero">Creador de unabru.tk y fiel amante del desarrollo web, con mis conocimientos puedo expandir tu negocio a través de la web, haciendo crecer tus ventas y llegar más lejos.</p>
                                </div>
                            </div>

                            <div className='content-contact'>
                                <Link to="experiencia-con-empresas" className='btn-mas-info'>Mas sobre mi</Link>
                                <Contact />                             
                            </div>
                        </div>
                    </div>
                </div>
                <div className="super-menu">
                    <div className="item-1">
                        <img src={dev} alt="Dev Computer"/>
                    </div>
                    
                    <div className="item-2" style={{backgroundImage: `url(${develop})`}}>
                        
                    </div>
                </div>
            </section>
        ) 
    }
}