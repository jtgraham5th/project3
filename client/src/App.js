import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarWdivs from "./components/NavbarWdivs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderDrinks from "./containers/OrderDrinks";


import LocalBars from "./containers/Lbars";
import OrderSummary from "./containers/OrderSummary";
import Bartender from "./containers/Bartender";


import Home from "./containers/Home";



// import Register from "./components/Register";
// import Bars from "./components/Login";

// import Navbar from "./components/Navbars/Navbar";

import TopNav from "./components/TopNavbar";

import "./index.css";

class App extends Component {
  render() {
    return (
      
        <Router>
          {/* <Navbar /> */}
          
          <Route exact path="/" component={Home} />
       
          <Switch>
            <Route path exact path="/TopNav" component={TopNav} />
            <Route path exact path="/Bars" component={LocalBars} />
           
            <Route path="/Bartender" component={Bartender} />
            
            <Route path="/summary" component={OrderSummary} />
          
            <Route path="/orderDrinks" component={OrderDrinks} />
          </Switch>
        </Router>
      
    );
  }
}
export default App;
