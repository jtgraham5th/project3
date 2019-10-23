import React, { Component } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

class OrderDrinks extends Component {
  state = {
    drinks: [],
    searchQuery: ""
  };

  componentDidMount() {
    // this.getDrinks();
  }

  handleInputChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + this.state.searchQuery)
      .then(drinks => {
        console.log(drinks);
        this.setState({ drinks: drinks.data.drinks });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Navbar />
        <h1>Drinkson</h1>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {this.state.drinks.map((drink, i) => (
          <div className="row border" key={drink.idDrink}>
            <div className="col-md-2 border">
              <img className="w-100" src={drink.strDrinkThumb}></img>
            </div>
            <div className="col-md-8">
              <h1>{drink.strDrink}</h1>
              <p>
                <h5>
                  {" "}
                  {drink.strIngredient1}, {drink.strIngredient2},{" "}
                  {drink.strIngredient3}, {drink.strIngredient4}{" "}
                </h5>
              </p>
            </div>
            <div class="col-md-2">
              <Link to={"/drinks/" + drink._id}>
                <button class="primary">Order</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default OrderDrinks;
