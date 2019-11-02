import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import bar from "../assets/bars-lights.jpg";
// import Main from "../assets/main-hero-desktop.jpg";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel'

class Home extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container className ="col" style={{backgroundColor:"red"}}>
        <div className ="col" style={{textAlign:"center", margin: "auto"}}>
          <h1>Welcome to Drinks on Us</h1>
          <p>
            A way for User's to create an Order with a Bartender and Skip the
            Line.
          </p>
        </div>
        </Container>
        <div className="jumbotron" style={{ textAlign:"center", margin: "auto"}}>
              <img src={bar} alt="Bars" style={{width: "75%"}}/>
          </div>
          <div className="row" style={{paddingTop: "2em"}}>
          <div className="col"></div>
          <div className="col" style={{textAlign:"center", margin: "auto"}}>
            <Link to="/register">
              <button className="btn btn-secondary">Sign Up or Login</button>
            </Link>
          </div>
          <div className="col"></div>
        </div>
      </Jumbotron>
    );
  }
}


export default Home;
