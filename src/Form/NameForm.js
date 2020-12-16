import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    
        this.setState({value: event.target.value});  }

    handleSubmit(event) {
        event.preventDefault();
      this.setState({show: this.state.value});
    }
  
    render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
          <input type="submit" value="Submit" />
          <p>Your name is: <b>{this.state.show}</b></p>
        </form>
      );
    }
  }

  export default NameForm