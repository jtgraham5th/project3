import React from "react";
import "./style.css";
import { Nav, NavItem, NavLink } from "reactstrap";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function NavbarWdivs(props) {
  return (
    <div className="row m-0">
      <a href="/" className="col-sm-3 border text-center h3 p-3 m-0">
          Home
      </a>
      <a href="/Bars" className="col-sm-3 border text-center h3 p-3 m-0">
          Bars
      </a>
      <a href="/OrderDrinks" className="col-sm-3 border text-center h3 p-3 m-0">
          Order Drinks
      </a>
      <a href="/Bartender" className="col-sm-3 border text-center h3 p-3 m-0">
          Bartender View
      </a>
    </div>
  );
}

export default NavbarWdivs;
