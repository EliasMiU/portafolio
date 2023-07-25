import React, { Component } from "react";
/**
 * import './Projects.css';
 * Asi se agregaria si la hoja CSS estuviera asociada directamente
 * 
*/


export default class Project extends Component {
      render() {
        //const {project} = this.props;

        return (
            <div className='text-center project-item' style={{ backgroundImage:`url(${this.props.project.img})`}} >
                <div className='info'>
                    <h4 className="title">{this.props.project.name}</h4>                 
                    <a href={this.props.project.url} target="_blank" rel="noreferrer" className="btn btn-outline-secondary" >
                        Ver sitio web
                    </a>
                </div>
            </div>
        ) 
    }
}