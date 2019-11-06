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
          <Link 
            to="/register"
            style={{
              width: "140px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
              {/* <button className="btn btn-secondary">Sign Up or Login</button> */}
          </Link>
          <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>


        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomeJumbo;
