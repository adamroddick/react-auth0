import React from "react";
import { Route, Router } from 'react-router-dom';
import Menu from "./Menu.jsx";
import Home from './Home.jsx';
import Callback from './Callback.jsx';
import Auth from './Auth.js';
import history from './history.js';
import Card from "./Card.jsx";
import Form from "./Form.jsx";
import ReactDOM from 'react-dom';
import Test from './Test.jsx';

const auth = new Auth();

const CardList = props => {
  return (
    <div>
      {props.cards.map(card => (
        <Card {...card} />
      ))}
    </div>
  );
};

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
      <div>
        <div className="container">
          <div className="row">
            <Form onSubmit={this.createCard} />
          </div>
          <div className="row">
            <CardList cards={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class MainRoutes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" exact render={(props) => <App auth={auth}/>} />
          <Route path="/test" render={(props) => <Test auth={auth}/>} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
    );
  }
}

const content = document.querySelector("div#content");
const nav = document.querySelector("div#nav")

ReactDOM.render(<Menu auth={auth}/>, nav);
ReactDOM.render(<MainRoutes />, content);