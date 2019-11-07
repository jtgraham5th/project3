import React from "react";
import "./style.css";
// import { Nav, NavItem, NavLink } from "reactstrap";
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faWineGlass,
  faHome,
  faBeer,
  faCashRegister,
} from '@fortawesome/free-solid-svg-icons'
// import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(
  // fab,
  // fad,
  faWineGlass,
  faHome,
  faBeer,
  faCashRegister
)
// Using the datalist element we can create autofill suggestions based on the props.breeds array
function NavbarWdivs(props) {
  return (
    <nav className="fixed-botton navbar-expand-lg navbar-light bg-light">
      <a href="/" className="col-sm-3 border text-center h3 p-3 m-0">
          Home
          <FontAwesomeIcon
              icon={faHome}
              size="2x"
              // style={{ '--fa-primary-color': 'red' }}
            />
      </a>
      <a href="/Bars" className="col-sm-3 border text-center h3 p-3 m-0">
          Bars
          <FontAwesomeIcon
              icon={faWineGlass}
              size="2x"
              // style={{ '--fa-primary-color': 'red' }}
            />
      </a>
      <a href="/OrderDrinks" className="col-sm-3 border text-center h3 p-3 m-0">
          Order Drinks
          <FontAwesomeIcon
              icon={faCashRegister}
              size="2x"
              // style={{ '--fa-primary-color': 'red' }}
            />
      </a>
      <a href="/Bartender" className="col-sm-3 border text-center h3 p-3 m-0">
          Bartender View
          <FontAwesomeIcon
              icon={faBeer}
              size="2x"
              // style={{ '--fa-primary-color': 'red' }}
            />
      </a>
    </nav>
  );
}
export default NavbarWdivs;
