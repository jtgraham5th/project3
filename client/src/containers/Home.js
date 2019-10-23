import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Drinks on Us</h1>
        <Link to="/">Login</Link>
        <div>
          <br/>
        </div>
        <Link to="/">Sign-In</Link>
        <div>
          <br/>
        </div> 
        <Link to="/Checkin">Check-In</Link>
        <div>
          <br/>
        </div>
        <Link to="/OrderDrinks">Select Drink - Order Drink</Link>
        <div>
          <br/>
        </div>
        <Link to="/Lbars">Local Bars</Link>
        <div>
          <br/>
        </div>
        <Link to="/Order">Order Summary </Link>
        <div>
          <br/>
        </div>
        <Link to="/edit"> Edit Drink</Link>
        <br/>
        <Link to="/"> More to Come</Link>
      </div>
    );
  }
}

export default Home;
