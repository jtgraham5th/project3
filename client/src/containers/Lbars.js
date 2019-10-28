import React, { Component } from "react";
import Axios from "axios";

// API key AIzaSyAlHrNlmCS8c70eIYOlfkD6JijDgE5sfOc

class Bars extends Component {
  state={
    bars: []
  };

  componentDidMount() {

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const mapsurl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars&location=84.3963000,33.7756000&radius=100&key=AIzaSyCxdeV70eNJ_KpZDdphRVKntO23zlCg6KA`;
  

    
    
    Axios
    .get (proxyurl + mapsurl)
    .then (response => {
      console.log(response)
      this.setState({
        bars: response.data.results
      })
      console.log(this.state.bars)
    })
  };
// bar.formatedaddress
  render() {
    return (
      <div>
        <h1>Local Bars to Search</h1>
        <div>
        {this.state.bars.map((bar,index) =>(
          <div className="row border" key={bar.id}>
            <div className="col-md-8">
              <h1>
                {bar.name}
              </h1>
              <h5>
                {bar.formatted_address}
              </h5>
            </div>
          </div>
        ))}
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

  //get the user location from storage
  // const location = getUserLocation();

  //call the api with the user specific location 

  
  // $.ajax({
  //     url: proxyurl + mapsurl,
  //     method: "GET"
  // }).then(function(response) {
  //     var apiResults = response.results;
  //     console.log(apiResults);
  //     var limitedResults = apiResults.slice(0, 5);
  //     //get the table body and save it a JQuery object
  //     var barsTableBody = $('#bars-table-body');
  //     //loop through the result 
  //     limitedResults.forEach(function(result) {
  //         places.push({
  //           CurrentLocation.defaultProps = {
  //             zoom: 14,
  //             initialCenter: {
  //               lat: -1.2884,
  //               lng: 36.8233
  //             },
             
  //         });







