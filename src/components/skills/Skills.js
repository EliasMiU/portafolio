import React, { Component } from "react";
import skill from "../../data/skill";
/*
** import './Hero.css'; 
** Asi se agregan los estilos si estiviera en cada componente la hoja CSS.
*/

export default class Skills extends Component {

    state = {
        skills: skill
    }

    render() {
        return <section id="stack" className="skills py-5">
            <div className="container py-5">
                <h2 className="section-title text-center">Lenguajes y Herramientas</h2>
                <ul className="list-skill">
                    {
                        this.state.skills.map( (skill) => {
                            return (
                                <li key={skill.id}><img src={skill.img} alt={skill.name} /></li> 
                            ) 
                        })
                    }
                </ul>
            </div>
        </section>
        
    }
}