import React, { Component } from 'react';
import projects from '../../data/projects';
import Project from './Project';


export default class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects: projects
        }
    }

    render() {
        return (
           <section id='projects' className='projects py-5' >
                <div className='container py-3'>
                    <div className="col-12">
                        <h2 className='section-title'>Proyectos</h2>
                        <div className='d-flex flex-wrap'>
                            {
                                this.state.projects.map( project => {   
                                    return (
                                        <Project project={project}  key={project.id}/>
                                    )                           
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        ) 
    }
}
