import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import {Nav, Navbar }from 'react-bootstrap'
import "./style.css";

class TopNav extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (

   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">DrinksOn</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
    <ul className="navbar-nav mr-auto">
   
      <li className="nav-item"
        onClick={this.onLogoutClick}
        className="btn btn-light waves-effect waves-light hoverable gray accent-3"
      >
        Logout
      </li>
      </ul>
     
      <span className="navbar-text">
      {/* <b>Hey there,</b> {user.name.split(" ")[0]} */}
      </span>
      </nav>
      

   
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


