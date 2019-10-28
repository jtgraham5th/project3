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
  postIndex = (value, arr, prop, state) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
  };
  addDrink = event => {
    event.preventDefault();
    const id = event.target.id;
    const newDrink = {
      drinkId: this.state.drinks[id].idDrink,
      drinkThumb: this.state.drinks[id].strDrinkThumb,
      drinkName: this.state.drinks[id].strDrink,
      ingredient1: this.state.drinks[id].strIngredient1,
      ingredient2: this.state.drinks[id].strIngredient2,
      ingredient3: this.state.drinks[id].strIngredient3,
      ingredient4: this.state.drinks[id].strIngredient4,
      ingredient5: this.state.drinks[id].strIngredient5,
      // ingredient1Measure: this.state.drinks[id].strMeasure1,
      // ingredient2Measure: this.state.drinks[id].strMeasure2,
      // ingredient3Measure: this.state.drinks[id].strMeasure3,
      // ingredient4Measure: this.state.drinks[id].strMeasure4,
      // ingredient5Measure: this.state.drinks[id].strMeasure5,
      glass: this.state.drinks[id].strGlass,
      instructions: this.state.drinks[id].strInstructions
    };
    console.log(newDrink);

    axios
      .post("/api/new", {newDrink})
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
        alert("Failed to create: " + err.message);
      });
    console.log({ newDrink });
  };

  handleInputChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
          this.state.searchQuery
      )
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
        <h1>Drinks-on</h1>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {this.state.drinks.map((drink, index) => (
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
              <Link to={"/edit/" + drink._id}>
                <button ClassName="primary" id={index} onClick={this.addDrink}>
                  Order
                </button>
              </Link>
              
              
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default OrderDrinks;
