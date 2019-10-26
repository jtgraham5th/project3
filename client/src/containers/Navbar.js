import React, { Component } from "react";

import { Nav, NavItem, NavLink } from 'reactstrap';
class Navbar extends Component {
  render() {
    return (
    <div>
      <Nav tabs>
      <NavItem>
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
        </Nav>
      </div>
    );
  }
}
export default Navbar;

