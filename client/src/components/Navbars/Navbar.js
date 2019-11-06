import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import PropTypes from "prop-types";

import { NavItem, NavLink } from 'reactstrap';


class Navbar extends Component {

  // state = {
  //   dropdown: false
  // };

  // componentDidMount() {
  //   document.addEventListener("mousedown", this.handleClick, false);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener("mousedown", this.handleClick, false);
  // }

  // // Close dropdown when click outside
  // handleClick = e => {
  //   if (this.state.dropdown && !this.node.contains(e.target)) {
  //     this.setState({ dropdown: !this.state.dropdown });
  //   }
  // };

  // onLogoutClick = e => {
  //   e.preventDefault();
  //   this.props.logoutUser(this.props.history);
  //   window.location.href = "/";
  // };

  // handleProfileClick = e => {
  //   this.setState({ dropdown: !this.state.dropdown });
  // };


  // onLogoutClick = e => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  // };


  render() {
    // const { name} = this.props.auth.user;

    return (
  <div>
      <nav className="fixed-bottom" style={{backgroundColor:"white", height:"50px"}}>
      <NavItem style={{color:"black"}}>
      <NavLink href="/" active>Home</NavLink>
    </NavItem>
        <NavItem>
          <NavLink href="/Login" active>Login</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/Register" active>Sign Up</NavLink>
      </NavItem>

      <NavItem>
      <NavLink href="/Checkin" active>Check-In</NavLink>
    </NavItem>

    <NavItem>
    <NavLink href="/OrderDrinks" active>Order Drink</NavLink>
  </NavItem>

  <NavItem>
    <NavLink href="/Bars" active>Bars</NavLink>
  </NavItem>

         
  
      </nav>
 </div >

    )
  }
}


                Navbar.propTypes = {
                  logoutUser: PropTypes.func.isRequired,
                  auth: PropTypes.object.isRequired
                };
                
                const mapStateToProps = state => ({
                  auth: state.auth
                });
                
                export default connect(
                  mapStateToProps,
                  { logoutUser }
                )(Navbar);

