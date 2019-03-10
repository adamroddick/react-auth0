import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from "./Menu.jsx";
import Game from './Game.jsx';
//import Form from "./Form.jsx";
import ReactDOM from 'react-dom';
//import Test from './Test.jsx';
import textContent from './textContent.js'
import netlifyIdentity from 'netlify-identity-widget';

window.netlifyIdentity = netlifyIdentity;
netlifyIdentity.init();

class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => {
    netlifyAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    {/*let { from } = this.props.location.state || { from: { pathname: '/' } };*/}
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
};

class Intro extends React.Component {
  render() {
    return (
    <div className="container">
      <div className="row">
        <h2>{textContent.introHeading}</h2>
      </div>
      <div className="row">
        <h3>{textContent.homeHistoryHeading}</h3>
        <p>{textContent.homeHistory}</p>
      </div>
      <div className="row">
        <h3>{textContent.homeObjectiveHeading}</h3>
        <p>{textContent.homeObjective}</p>
      </div>
    </div>
    )
  }
}

class App extends React.Component {
  state = {
    data: []
  };

  createCard = json => {
    json.key = json.id; // to satisfy Reacts requirement for a unique key
    this.setState(prevState => ({
      data: prevState.data.concat(json)
    }));
  };

  render() {
    return (
      netlifyAuth.isAuthenticated ? (
      <div>
        <div className="container">
          {
              <Game />  
          }
          </div>
        </div>
        ) : (
      <div>
        <div className="container">
          {
              <Intro />
          }
        </div>
      </div>
      )
    );
  }
}

class MainRoutes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" render={(props) => <App />} />
          {/*<Route path="/test" render={(props) => <Test />} /> */}
          <Route path="/home" render={(props) => <Game {...props} />} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

const content = document.querySelector("div#content");
const nav = document.querySelector("div#nav")

ReactDOM.render(<Menu />, nav);
ReactDOM.render(<MainRoutes />, content);
