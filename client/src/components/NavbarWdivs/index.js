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

    <nav id="bottom=nav" className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="btn-group btn-group-lg">
          <a href="/" className="btn btn-light">Home
          <span><FontAwesomeIcon
              icon={faHome}
              size="fa-lg"
              // style={{ '--fa-primary-color': 'red' }}
            /></span>
      </a>
      <a href="/Bars" className="btn btn-light">
          Bars
          <FontAwesomeIcon
              icon={faWineGlass}
              size="fa-lg"
              // style={{ '--fa-primary-color': 'red' }}
            />
      </a>
      <a href="/OrderDrinks" className="btn btn-light">
          Order Drinks
          <FontAwesomeIcon
              icon={faCashRegister}
              size="fa-lg"
              // style={{ '--fa-primary-color': 'red' }}
            />
      </a>
      <a href="/Bartender" className="btn btn-light">
          Bartender View
          <FontAwesomeIcon
              icon={faBeer}
              size="fa-lg"
              // style={{ '--fa-primary-color': 'red' }}
            />
      </a>
      </div>
    </nav>
  
  );
}
export default NavbarWdivs;

