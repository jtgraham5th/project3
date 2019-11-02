// // import React, { Component } from "react";


import React from "react";
// import { geolocation } from "react-geolocated";


class LoggingButton extends React.Component {
  handleClick() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);
    });

  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <div>
        <p>Welcome to the Checkin in Page</p>

        <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
      </div>
      

    );
  }
}
export default LoggingButton

// 