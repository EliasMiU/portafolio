import React, { Component } from "react";

class Pokecard extends Component {
  constructor(props){
    super(props);
    this.state = {
        infoPoke: [],
        imageUrl: "",
        isLoading: true,
    };
  }

  componentDidMount(){
    fetch(this.props.poke.url)
    .then( response => response.json())
    .then( data => {
          this.setState({
            infoPoke: data,
            imageUrl: data.sprites.front_default
          });
          console.log(data);
          this.setState({ isLoading: false });
      })
      .catch(error => console.log(error));

  };

  render(){

    if(this.state.isLoading){
      return(
        <img src="./assets/img/loading-pokemon.gif" alt="Loading..." />
      )
    }

    const { imageUrl, infoPoke } = this.state

      return(<>
        <div className="poke-card">
            <div className="pk-header">
              <p>{this.props.poke.name}</p>
            </div>
            <div className="pk-body">
              <p><img src={imageUrl} alt="" /></p>
            </div>
            <div className="pk-footer">
              <p>{infoPoke.id}</p>
            </div>
        </div>
      </>);
  }
}

export default Pokecard;