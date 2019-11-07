import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class TopNav extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (

   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">DrinkOn</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
 
    <ul class="navbar-nav mr-auto">
   
      <li class="nav-item"
        onClick={this.onLogoutClick}
        className="btn btn-light waves-effect waves-light hoverable gray accent-3"
      >
        Logout
      </li>
      </ul>
     
      <span class="navbar-text">
      <b>Hey there,</b> {user.name.split(" ")[0]}
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


