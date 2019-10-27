import React from "react";
import OrderDrinks from "./containers/OrderDrinks";
import Home from "./containers/Home";
import Checkin from "./containers/Checkin";
import LocalBars from "./containers/Lbars";
import OrderSummary from './containers/OrderSummary';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Lbars" component={LocalBars} />
        <Route path="/summary" component={OrderSummary}/>
        <Route path="/checkin" component={Checkin} /> 
        <Route path="/orderDrinks" component={OrderDrinks} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
