
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./containers/Register";
import Login from "./containers/Login";
import OrderDrinks from "./containers/OrderDrinks";
import Home from "./containers/Home";
import Checkin from "./containers/Checkin";
import LocalBars from "./containers/Lbars";
import OrderSummary from './containers/OrderSummary';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



class App extends Component {
  render() {
  return (
 
    <Router>
    <div className="App">
          <Navbar />
    </div>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/Bars" component={LocalBars} />
        <Route path="/summary" component={OrderSummary}/>
        <Route path="/checkin" component={Checkin} /> 
        <Route path="/orderDrinks" component={OrderDrinks} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
   
  );
}
}

export default App;
