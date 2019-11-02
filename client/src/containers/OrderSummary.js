import React, { Component } from "react";
import axios from "axios";
import CheckoutBtn from "../components/CheckoutBtn";
import { Button } from 'reactstrap'

// import { Link } from "react-router-dom";

class OrderSummary extends Component {
  state = {
    drinks: [],
    loaded: false
  };

  componentDidMount() {
    axios
      .get("/order-summary")
      .then(response => {
        console.log(response.data.data);
        this.setState({
          drinks: response.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
    // await console.log(this.state.drinks);
    this.setState({ loaded: true });
  }

  removeDrink = event => {
    event.preventDefault();
    const id = event.target.id;
    const drinkToBeRemoved = this.state.drinks[id]._id;
    let shouldDelete = window.confirm(
      "Are you sure you want to delete this drink?"
    );
    if (shouldDelete === true) {
      axios
        .delete(`/order-summary/drink/${drinkToBeRemoved}`)
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
    }
  };

  changeMeasure = event => {
    const { name, id, value } = event.target;
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
      .post("/order-summary", newOrder)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
        alert("Failed to create: " + err.message)
      });
    //     "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
    //       this.state.searchQuery
    //   )
    //   .then(drinks => {
    //     console.log(drinks);
    //     this.setState({ drinks: drinks.data.drinks });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  render() {
    return (
      <div>
        <h1>Edit Drinks</h1>
        <h1>Drinkson</h1>
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
                    <Button
                      color="success"
                      id={index}
                      name={i}
                      value="+"
                      onClick={this.changeMeasure}
                    >
                    </Button>
                  </div>
                  <div className="col-md-2">{ingredient.measure}</div>
                  <div className="col-md-1">
                    <Button
                      color="success"
                      id={index}
                      name={i}
                      value="-"
                      onClick={this.changeMeasure}
                    >
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-2">
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
        <CheckoutBtn handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default OrderSummary;
