import React, {Component} from "react";

export default class EssayForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Essay:
            </label>
          </div>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }