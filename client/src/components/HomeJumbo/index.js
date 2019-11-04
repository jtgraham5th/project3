import "./style.css";
import React from "react";
import { Jumbotron, Container } from "reactstrap";
import bar from "../../assets/bars-lights.jpg";
import { Link } from "react-router-dom";


const HomeJumbo = props => {
  return (
    <div>
      <Jumbotron style={{ backgroundImage: `url(${bar})`,backgroundSize: 'cover'}} fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to Drinks on Us</h1>
          <p className="lead">
            A way for User's to create an Order with a Bartender and Skip the
            Line.
          </p>
          <Link to="/register">
              <button className="btn btn-secondary">Sign Up or Login</button>
          </Link>

        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomeJumbo;
