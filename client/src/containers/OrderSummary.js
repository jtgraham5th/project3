import React, { Component } from "react";
import axios from "axios";
import CheckOutBtn from "../components/CheckoutBtn";
import NavbarWdivs from "../components/NavbarWdivs";
import TopNav from "../components/TopNavbar";

import { Button } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

// import { fad } from '@fortawesome/pro-duotone-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faSortUp, faSortDown);
// import { Link } from "react-router-dom";
let userId = "";

class OrderSummary extends Component {
  state = {
    drinks: [],
    currentOrder: []
  };

  componentDidMount() {
    axios
      .get("/api/drinks/order-summary")
      .then(response => {
        console.log(response.data.data);
        this.setState({
          drinks: response.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(`/api/drinks/order-summary/${userId}`)
      .then(response => {
        console.log(response.data.data);
        this.setState({
          currentOrder: response.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  removeDrink = event => {
    event.preventDefault();
    const id = event.target.id;
    const drinkToBeRemoved = this.state.drinks[id]._id;
    let shouldDelete = window.confirm(
      "Are you sure you want to delete this drink?"
    );
    // if (shouldDelete === true) {
      axios
        .delete(`/api/drinks/order-summary/drink/${drinkToBeRemoved}`)
        .then(response => {
          console.log(response);
          alert("Drink has been removed");
          this.props.history.push("/summary");
        })
        .catch(err => {
          console.log(err);
          alert("Failed to create: " + err.message);
        });
      let drinksCopy = Array.from(this.state.drinks);
      if (id !== -1) {
        drinksCopy.splice(id, 1);
        this.setState({ drinks: drinksCopy });
      }
    // }
  };

  changeMeasure (id,name,value){
    // const { name, id, value } = event.target;
    console.log(name);
    console.log(id);
    console.log(value);
    this.setState(state => {
      const list1 = state.drinks.map((item, j) => {
        if (parseInt(id) === parseInt(j)) {
          console.log(item);
          const list2 = item.ingredients.map((ingredient, i) => {
            if (parseInt(i) === parseInt(name)) {
              if (value === "+") {
                ingredient["measure"] = parseInt(ingredient.measure) + 1;
              } else if (value === "-") {
                ingredient["measure"] = parseInt(ingredient.measure) - 1;
              }
              return ingredient;
            } else {
              return ingredient;
            }
          });
          return list2;
        } else {
          return item;
        }
      });
      console.log(list1);
      return list1;
      // this.props.history.push("/summary");
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.drinks);
    event.preventDefault();
    // const id = event.target.id;
    const newOrder = {
      name: "Jimmy",
      order: this.state.drinks
    };
    console.log(newOrder);

    axios
      .post("/api/drinks/order-summary", newOrder)
      .then(response => {
        console.log(response.data.data._id);
        userId = response.data.data._id;
      })
      .catch(err => {
        console.log(err);
        alert("Failed to create: " + err.message);
      });

    this.state.drinks.map((drink, i) => {
      axios
        .delete(`/api/drinks/order-summary/drink/${drink._id}`)
        .then(response => {
          console.log(response);
          this.props.history.push("/summary");
        })
        .catch(err => {
          console.log(err);
          alert("Failed to create: " + err.message);
        });
    });
    this.setState({ drinks: [] });
    };

  render() {
    return (
      <div>
        <TopNav />
        <h1>Edit Drinks</h1>
        {this.state.drinks.map((drink, index) => (
          <div className="row border">
            <div className="col-md-2 border">
              <img
                className="w-100"
                src={drink.drinkThumb}
                alt={drink.drinkName}
              />
            </div>
            <div className="col-md-8">
              <h1>{drink.drinkName}</h1>
              {drink.ingredients.map((ingredient, i) => (
                <div className="row">
                  <div className="col-md-8">{ingredient.name}</div>
                  <div className="col-md-1">
                  <FontAwesomeIcon
                        icon={faSortUp}
                        size="2x"
                        color="success"
                        id={index}
                        name={i}
                        value="+"
                        onClick={() => this.changeMeasure((index),(i),"+")}
                      />
                  </div>
                  <div className="col-md-1">{ingredient.measure}</div>
                  <div className="col-md-1">
                      <FontAwesomeIcon
                        icon={faSortDown}
                        size="2x"
                        color="success"
                        id={index}
                        name={i}
                        value="-"
                        onClick={() => this.changeMeasure((index),(i),"-")}
                      />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-1">
              <button
                className=" btn btn-danger"
                id={index}
                onClick={this.removeDrink}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <CheckOutBtn handleFormSubmit={this.handleFormSubmit} />
        <NavbarWdivs />
      </div>
    );
  }
}
export default OrderSummary;