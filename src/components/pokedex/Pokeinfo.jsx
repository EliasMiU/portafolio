import React, { Component } from "react";
import axios from "axios";
import Pokecard from "./Pokecard";

class Pokeinfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then( response => {
            this.setState( () => {
                return {data: response.data.results}
            });
            //console.log(response.data);
        })
        .catch( error => {
            console.log(error);
        });
    }

    render() {
        const { data } = this.state;
       
        return (
            <section className="section-cards" >
                <div className="container">
                    <div className="containt">
                        {
                            data.map( (date, index) => {
                                return(
                                    <Pokecard key={index} poke={date} />
                                )
                            })
                        }
                    </div>
                </div>    
            </section>                    
        );
    }
}

export default Pokeinfo;