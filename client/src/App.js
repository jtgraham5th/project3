import React from "react";
import OrderDrinks from "./containers/OrderDrinks";
import Home from "./containers/Home";
import Checkin from "./containers/Checkin";
import LocalBars from "./containers/Lbars";
import Order from './containers/Order';
import Edit from './containers/edit';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/edit" component={Edit} />
        <Route path="/Lbars" component={LocalBars} />
        <Route path="/Order" component={Order}/>
        <Route path="/checkin" component={Checkin} /> 
        <Route path="/OrderDrinks" component={OrderDrinks} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
