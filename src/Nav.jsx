import React from 'react';
import Auth from './Auth.js';

const auth = new Auth();

export default class Form extends React.Component {
  state = {}

  onClick = (event) => {
        // event.preventDefault();
        auth.login();
    }
  
  render() {
    return (
      <button onClick={this.onClick}>Login</button>
    )
  }
}