import React, { Component} from "react";

//Components
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Info from "../info/Info";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";

export default class Home extends Component {

    mostrarMas = () => {
        let masInfo = document.querySelector(".mas-info");
        masInfo.classList.toggle('active');
    }

    render(){

        return( <section>
            <Header />
            <Hero mostrar={this.mostrarMas} />
            <Info />
            <Projects />
            <Skills />
        </section> )
    }
}
