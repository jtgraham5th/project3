import React, { Component } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import Navbar from "../components/Navbar";
import CheckoutBtn from "../components/CheckoutBtn";

class OrderDrinks extends Component {
  state = {
    drinks: [],
    searchQuery: ""
  };

  componentDidMount() {
    // this.getDrinks();
  }
  addDrink = event => {
    event.preventDefault();
    const id = event.target.id;
    const newDrink = {
      drinkId: this.state.drinks[id].idDrink,
      drinkThumb: this.state.drinks[id].strDrinkThumb,
      drinkName: this.state.drinks[id].strDrink,
      ingredients: [
        {
          name: this.state.drinks[id].strIngredient1,
          measure: parseInt(this.state.drinks[id].strMeasure1)
        },
        {
          name: this.state.drinks[id].strIngredient2,
          measure: parseInt(this.state.drinks[id].strMeasure2)
        },
        {
          name: this.state.drinks[id].strIngredient3,
          measure: parseInt(this.state.drinks[id].strMeasure3)
        },
        {
          name: this.state.drinks[id].strIngredient4,
          measure: parseInt(this.state.drinks[id].strMeasure4)
        },
        {
          name: this.state.drinks[id].strIngredient5,
          measure: parseInt(this.state.drinks[id].strMeasure5)
        },
      ],
      glass: this.state.drinks[id].strGlass,
      instructions: this.state.drinks[id].strInstructions
    };
    console.log(newDrink);

    axios
      .post("/api/new", newDrink)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
        alert("Failed to create: " + err.message);
      });
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
        <h1>Drinkson</h1>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {this.state.drinks.map((drink, index) => (
          <div className="row border" key={drink.idDrink}>
            <div className="col-md-2 border">
              <img
                className="w-100"
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
              />
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
            <div className="col-md-2">
              <button className="primary" id={index} onClick={this.addDrink}>
                Order
              </button>
            </div>
          </div>
        ))}
        <CheckoutBtn />
      </div>
    );
  }
}

export default OrderDrinks;
