import React, { Component } from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
import HomeJumbo from "../components/HomeJumbo";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import bar from "../assets/bars-lights.jpg";
// import Main from "../assets/main-hero-desktop.jpg";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel'

class Home extends Component {
  render() {
    return (
      <div>
        <HomeJumbo />
      </div>
    );
  }
}

export default Home;
