import React from "react";
import "./style.css";
import { Nav, NavItem, NavLink } from 'reactstrap';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Navbar(props) {
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

export default Navbar;
