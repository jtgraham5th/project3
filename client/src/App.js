import React from "react";
import OrderDrinks from "./containers/OrderDrinks";
import Home from "./containers/Home";
// import Single from "./containers/Single";
// import NewCar from "./containers/NewCar";
// import EditCar from './containers/EditCar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/new-car" component={NewCar} />
        <Route path="/edit/:id" component={EditCar}/>
        <Route path="/collection/:id" component={Single} /> */}
        <Route path="/order" component={OrderDrinks} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
