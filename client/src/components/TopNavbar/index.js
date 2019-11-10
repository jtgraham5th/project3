import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/services";
// import {Nav, Navbar }from 'react-bootstrap'
import "./style.css";

class TopNav extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    

    return (

   <nav className="navbar navbar-expand-lg fixed-top">
   
 
  
     
     
      </nav>
  
    );
  }
}



export default TopNav;



