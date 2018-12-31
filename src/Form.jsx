import React from 'react';
import makeRequest from './xhrPromise.js';
import { FormGroup, FormControl, Button } from "react-bootstrap";

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
      <div className="col-sm-4">
      <form onSubmit={this.submitAction}>
      <FormGroup>
        <FormControl
          type="text"
          value={this.state.userName}
          placeholder="adamroddick"
          onChange={(event) => this.setState({ userName: event.target.value}) }         />
        <FormControl.Feedback />
      </FormGroup>
      <Button className="primary" type="submit">Submit</Button>
    </form>
    </div>
    )
  }
}

Form.propTypes = {

}