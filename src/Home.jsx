import React, { Component } from 'react';

class Game extends React.Component {
    state = {
        metal: 0,
        wood: 0,
  };

  componentDidMount() {
    const state = JSON.parse(window.localStorage.getItem('gameState'));
    console.log('1')
    console.log(state)

    if (state) {
      this.setState(state);
    }
  }

  componentDidUpdate() {
    const state = this.state;
    console.log('2')
    console.log(state)

    window.localStorage.setItem('gameState', JSON.stringify(state));
  }

  metalCounter = (incrementValue) => {
    this.setState((prevState) => ({
      metal: prevState.metal + incrementValue
    }));
  };

  woodCounter = (incrementValue) => {
    this.setState((prevState) => ({
      wood: prevState.wood + incrementValue
    }));
  };

  render() {
    var div = 
      <div>
        <Resource incrementValue={1} onClickFunction={this.metalCounter} counter={this.state.metal} resource="metal"/>
        <Resource incrementValue={10} onClickFunction={this.metalCounter} counter={this.state.metal} resource="metal"/>
        <ResourceCounter counter={this.state.metal} resource="metal"/>
        
        <Resource incrementValue={1} onClickFunction={this.woodCounter} counter={this.state.wood} resource="wood"/>
        <Resource incrementValue={10} onClickFunction={this.woodCounter} counter={this.state.wood} resource="wood"/>
        <ResourceCounter counter={this.state.wood} resource="wood"/>
      </div>
    return div;
  }
}

class ResourceCounter extends React.Component {
    render() {
      return (
        <div>{this.props.resource}: {this.props.counter}</div>
    )
  }
}

class Resource extends React.Component {

    handleClick = () => {
      this.props.onClickFunction(this.props.incrementValue);
    };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.resource} +{this.props.incrementValue}
      </button>
    );
  }
}

export default class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <Game />  
          )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}
