
import React, { Component } from "react";
import "./App.css";
import Navbar from "./containers/Navbar";


import Register from "./containers/Register";

import Login from "./containers/Login";
import OrderDrinks from "./containers/OrderDrinks";
import Home from "./containers/Home";
import Checkin from "./containers/Checkin";
import LocalBars from "./containers/Lbars";
import Summary from './containers/Summary';
import Edit from './containers/edit';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



class App extends Component {
  render() {
  return (
 
    <Router>
    <div className="App">

          <Navbar />
      
         
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </div>
      <Switch>
        <Route path="/edit" component={Edit} />
        <Route path="/Lbars" component={LocalBars} />
        <Route path="/summary" component={Summary}/>
        <Route path="/checkin" component={Checkin} /> 
        <Route path="/OrderDrinks" component={OrderDrinks} />
        <Route path="/" component={Home} />
        
      </Switch>
    </Router>
   
  );
}
}

export default App;
