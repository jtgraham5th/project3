import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import CheckoutBtn from "../components/CheckoutBtn";
import { Link } from "react-router-dom";

class Edit extends Component {
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
          drinks: response.data.data, 
           
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

    axios
      .delete(`/order-summary/drink/${drinkToBeRemoved}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
        alert("Failed to create: " + err.message);
      });
  };

  increaseMeasure = event => {
    // const id = event.target.id;
    // const name = event.target.name

    const { name, id, value } = event.target;
    // let updatedValue = value + 1
    this.setState(state => {
      const list1 = state.drinks.map((item, j) => {
        if (j === id) {
          const list2 = item.ingredients.map((ingredient, i) => {
            if (i === name) {
              return ingredient.measure + 1;
            } else {
              return ingredient;
            }
          });
          return {
            list2
          };
        } else {
          return item;
        }
      });
      return {
        list1
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Edit Drinks</h1>
        <Navbar />
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
                    <button
                      className="btn btn-success"
                      id={index}
                      name={i}
                      value={ingredient.measure}
                      onClick={this.increaseMeasure}
                    />
                  </div>
                  <div className="col-md-2">{ingredient.measure}</div>
                  <div className="col-md-1">
                    <button
                      className="btn btn-success"
                      id={index}
                      name={i}
                      onClick={this.increaseMeasure}
                    />
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
      </div>
    );
  }
  // render() {
  //   if (this.state.loaded === false) {
  //     return <div> Waiting...</div>;
  //   } else {
  //     return <div>{this.content()}</div>;
  //   }
  // }
}

export default Edit;
