import React, { Component } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import Navbar from "../components/Navbar";
import CheckoutBtn from "../components/CheckoutBtn";
import { Link } from "react-router-dom";

class Edit extends Component {
  state = {
    drinks: []
  };

  componentDidMount() {
    axios
      .get("/order-summary")
      .then(response => {
        console.log(response);
        this.setState({ drinks: response.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Edit Drinks</h1>
        <Navbar />
        <h1>Drinkson</h1>
        {this.state.drinks.map((drink, index) => (
          <div className="row border" key={drink.idDrink}>
            <div className="col-md-2 border">
              <img className="w-100" src={drink.drinkThumb}></img>
            </div>
            <div className="col-md-8">
              <h1>{drink.drinkName}</h1>
              <p>
                <h5>
                  {" "}
                  {drink.Ingredient1}, {drink.Ingredient2}, {drink.Ingredient3},{" "}
                  {drink.Ingredient4}{" "}
                </h5>
              </p>
            </div>
            <div class="col-md-2">
              <Link to={"/edit/"}>
                <button class="primary">Order</button>
              </Link>
            </div>
          </div>
        ))}
        <CheckoutBtn />
      </div>
    );
  }
}

export default Edit;
