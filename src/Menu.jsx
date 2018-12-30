import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Auth from "./Auth.js";

const auth = new Auth();

export default class Menu extends React.Component {
  state = {
      companyName: "Adam's Space Company"
  };

  login() {
    auth.login();
  }

  logout() {
    auth.logout();
  }

  componentDidMount() {
    const { renewSession } = auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    //const { isAuthenticated } = this.props.auth;

    return (
      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">{this.state.companyName}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
        <Nav>
        <NavItem bsStyle='tabs' activeKey={1}>Home</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem bsStyle='tabs' activeKey={1} onClick={this.login.bind(this)}>Login</NavItem>
          <NavItem bsStyle='tabs' activeKey={2} onClick={this.logout.bind(this)}>Logout</NavItem>
        </Nav>
    </Navbar>
    );
  }
}
