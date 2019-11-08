import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Nav, Navbar }from 'react-bootstrap'
import "./style.css";

class TopNav extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (

    <Navbar className="navbar-expand-lg">
  <Navbar.Brand href="/">DrinkOn</Navbar.Brand>
  <Navbar.Toggle />
  <Nav.Link onClick={this.onLogoutClick}>Logout</Nav.Link>
  <Navbar.Collapse className="justify-content-end">
  <Navbar.Text>
  Hey There, {user.name.split(" ")[0]}
  </Navbar.Text>
  </Navbar.Collapse>
</Navbar>

    );
  }
}


TopNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(TopNav);


