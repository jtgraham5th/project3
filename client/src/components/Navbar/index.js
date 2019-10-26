import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav">
      <a className="nav-item nav-link active" href="www.yahoo.com">Home <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="www.yahoo.com">Features</a>
      <a className="nav-item nav-link" href="www.yahoo.com">Pricing</a>
      <a className="nav-item nav-link disabled" href="www.yahoo.com">Disabled</a>
    </div>
</nav>
  );
}

export default Navbar;
