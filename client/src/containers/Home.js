import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Drinks on Us</h1>
        <Link to="/">View All Drinks</Link>
        <div>
          <br/>
        </div>
        <Link to="/collection">Create A Drinks</Link>
        <div>
            <br/>
        </div>
        <Link to="/"> More to Come</Link>
      </div>
    );
  }
}

export default Home;
