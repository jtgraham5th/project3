import React, { Component } from "react";

// API key AIzaSyAlHrNlmCS8c70eIYOlfkD6JijDgE5sfOc

class Bars extends Component {
  render() {
    return (
      <div>
        <h1>Local Bars to Search</h1>
        <div>
          <form>
              <p>Bars </p>
          </form>
        </div>
      </div>
    );
  }
}


export default Bars;


//MAPS API 
$('#bars-button').click(function() {
  //get the user location from storage
  const location = getUserLocation();

  //call the api with the user specific location 

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const mapsurl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&rankby=distance&fields=name,photo,icon,website,opening_hour,formated_phone-number,formatted_address,rating&type=bar&key=AIzaSyAlHrNlmCS8c70eIYOlfkD6JijDgE5sfOc`;
  $.ajax({
      url: proxyurl + mapsurl,
      method: "GET"
  }).then(function(response) {
      var apiResults = response.results;
      console.log(apiResults);
      var limitedResults = apiResults.slice(0, 5);
      //get the table body and save it a JQuery object
      var barsTableBody = $('#bars-table-body');
      //loop through the result 
      limitedResults.forEach(function(result) {
          places.push({
            CurrentLocation.defaultProps = {
              zoom: 14,
              initialCenter: {
                lat: -1.2884,
                lng: 36.8233
              },
             
          });







