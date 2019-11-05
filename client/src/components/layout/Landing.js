import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "reactstrap";

// import bar from "../assets/bars-lights.jpg";



class Landing extends Component {
  render() {
    return (
      

      <Jumbotron fluid>
        <Container className ="col" style={{backgroundColor:"white"}}>
        <div className ="col" style={{textAlign:"center", margin: "auto"}}>
          <h1>Welcome to Drinks on Us</h1>
          <p>
            A way for User's to create an Order with a Bartender and Skip the
            Line.
          </p>
        </div>
        </Container>
        <div className="jumbotron" style={{ textAlign:"center", margin: "auto"}}>
              
          </div>
          <div className="row" style={{paddingTop: "2em"}}>
          <div className="col"></div>
          <div className="col" style={{textAlign:"center", margin: "auto"}}>
            <Link to="/Login">
              <button className="btn btn-secondary">Sign Up or Login</button>
            </Link>
          </div>
          <div className="col"></div>
        </div>
    
            <div className="col s6">
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
              </Link>
            </div>
            <div className="col s6">
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
            </div>
            </Jumbotron>
          
    );
  }
}

export default Landing;
