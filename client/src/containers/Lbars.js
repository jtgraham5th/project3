import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Axios from "axios";
import GoogleMapReact from "google-map-react";
import MapFlag from "../components/MapFlag";
import CheckinBtn from "../components/CheckinBtn";
import CheckoutBtnLB from "../components/CheckOutBtnLB";
import API from "../utils/API";
import {List} from "../components/List"
// const AnyReactComponent = ({ text }) => <div style={{ color: 'red'}}>{text}</div>;

// API key AIzaSyAlHrNlmCS8c70eIYOlfkD6JijDgE5sfOc

class Bars extends Component {
  state = {
    bars: [],
    currentBars: []
  };
  static defaultProps = {
    center: {
      lat: 33.7756,
      lng: -84.3963
    },
    zoom: 11
  };
  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const mapsurl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+Atlanta&key=AIzaSyCxdeV70eNJ_KpZDdphRVKntO23zlCg6KA`;

    // https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars&location=-84.39,33.77&radius=100&key=AIzaSyCxdeV70eNJ_KpZDdphRVKntO23zlCg6KA

    Axios.get(proxyurl + mapsurl).then(response => {
      console.log(response);
      this.setState({
        bars: response.data.results
      });
      console.log(this.state.bars);
    });
  }

  // loadBars = () => {
  //   API.getBar()
  //     .then(res => this.setState({ name: res.data }))
  //     .catch(err => console.log(err));
  // };

  deleteBars = id => {
    API.deleteBar(id)
      .then(res => this.loadBars())
      .catch(err => console.log(err));
  };

  checkin = event => {
    event.preventDefault();
    const index = event.target.id;
    let currentBars = this.state.currentBars;
    const foundBar = this.state.bars[index];
    currentBars.push(foundBar);
    this.setState({
      currentBars
    });   
  }

  checkout = event => {
    event.preventDefault();
    
    
    this.setState({currentBars: []});
    
   
    
  }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.bar.name) {
  //     API.saveBar({
  //       name: this.bar.name,
  //       address: this.bar.formatted_address
  //     })
  //       .then(res => this.loadbars())
  //       .catch(err => console.log(err));
  //   }
  // };

  // bar.formatedaddress
  render() {
    return (
      <div>
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCxdeV70eNJ_KpZDdphRVKntO23zlCg6KA"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.state.bars.map((bar, index) => (
              <MapFlag
                lat={bar.geometry.location.lat}
                lng={bar.geometry.location.lng}
                text={bar.name}
              />
            ))}
          </GoogleMapReact>
        </div>
        <Container fluid>
          <Row>
            <Col size="md-6" >
              <h1>Local Bars to Search</h1>
              <List>
              <div>
                {this.state.bars.map((bar, index) => (
                  <div className="row border" key={bar.id}>
                    <div className="col-md-8">
                      <h1>{bar.name}</h1>
                      <h5>{bar.formatted_address}</h5>
                    </div>
                    <CheckinBtn checkin={this.checkin} index={index}/>
                  </div>
                ))}
                
              </div>
              </List>
            </Col>
          
            <Col size="md-6 sm-12">
              <h1>Bars You've Check-In</h1>
              <div>
              <List>
                {this.state.currentBars.map((bar, index) => (
                  <div className="row border" key={bar.id}>
                    <div className="col-md-8">
                      <h1>{bar.name}</h1>
                      <h5>{bar.formatted_address}</h5>
                    </div>
                    <CheckoutBtnLB checkout={this.checkout}/>
                  </div>
                 
                ))} 
                </List>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <Col size="md-6"></Col> */}
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
