import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarWdivs from "./components/NavbarWdivs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import OrderDrinks from "./containers/OrderDrinks";

import Checkin from "./containers/Checkin";
import LocalBars from "./containers/Lbars";
import OrderSummary from "./containers/OrderSummary";
import Bartender from "./containers/Bartender";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./containers/Home";



import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

// import Navbar from "./components/Navbars/Navbar";
import PrivateRoute from "./components/private-route/PrivateRoute";
import TopNav from "./components/TopNavbar";

import "./index.css";

// // Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());

//     // Redirect to login
//     window.location.href = "./login";
//   }
// }
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          {/* <Navbar /> */}
          
          
        
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/TopNav" component={TopNav} />
            <PrivateRoute exact path="/Bars" component={LocalBars} />
           
            <Route path="/Bartender" component={Bartender} />
            
            <Route path="/summary" component={OrderSummary} />
            <Route path="/checkin" component={Checkin} />
            <Route path="/orderDrinks" component={OrderDrinks} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
