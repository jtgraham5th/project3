


import React from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import "./Landing.scss";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
// import { Slider } from "react-md";
const images = [
  "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=10000",
  "https://images.unsplash.com/photo-1509669803555-fd5edd8d5a41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=1000",
  "https://images.unsplash.com/photo-1566284628402-3f0895b3eb28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=1000",
  "https://images.unsplash.com/photo-1550850584-455a131629e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=1000",
  "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=50",
  "https://images.unsplash.com/photo-1568821113482-77d025de761d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=50",
  "https://images.unsplash.com/photo-1569924995007-e591d333f882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=50",
  
  "https://images.unsplash.com/photo-1570821574759-c104ca40f7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=50",

];

function Landing() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 9) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <>
    <Container className="header-container">
    
    <h1>Welcome to Drinks on Us</h1>
    A way for User's to create an Order with a Bartender and Skip the
      <div className="login-btn">
        <Link to="/Login">
            <button className="btn btn-secondary">Sign Up or Login</button>
        </Link>
        </div>
    </Container>
 
    <div className="gallery">
    <Gallery 
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image}  />
        
      ))}
      
    </Gallery>
   
  
    </div>
    </>
  
);
};
export default Landing;







