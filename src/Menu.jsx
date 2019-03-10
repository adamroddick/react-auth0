import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import textContent from './textContent.js'

//TODO get netlifyAuth from App.jsx instead of declaring it twice
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

class AuthButton extends React.Component {
  render() {
    return(
      netlifyAuth.isAuthenticated ? (
        <NavItem className='tabs' activeKey={1} 
        onClick={() => {netlifyAuth.signout();}}>
        Logout</NavItem>
      ) : (
        <NavItem className='tabs' activeKey={2} 
        onClick={() => {netlifyAuth.authenticate(() => {this.setState({ redirectToReferrer: true });});}}>
        Login</NavItem>
      )
    )
  }
}

export default class Menu extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">{textContent.companyName}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
        <Nav>
        <NavItem href="/home"className='tabs' activeKey={1}>Home</NavItem>
        </Nav>
        <Nav pullRight>
            <AuthButton />
        </Nav>
    </Navbar>
    );
  }
}
