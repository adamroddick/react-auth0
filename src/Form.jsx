import React from 'react';
import makeRequest from './xhrPromise.jsx';

export default class Form extends React.Component {
  state = {
    userName: ""
  }
  
  submitAction = (event) => {
    event.preventDefault();
    let url = "https://api.github.com/users/" + this.state.userName
    let create = this.props.onSubmit;

    makeRequest("GET", url)
      .then(function(json) {
        create(JSON.parse(json.response))
      })
      this.setState({ userName: '' })
  }
  
  render() {
    return (
      <form onSubmit={this.submitAction}>
        <input 
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value}) } 
          type="text" placeholder="adamroddick">
        </input>
        <button>Add</button>
      </form>
    )
  }
}

Form.propTypes = {

}