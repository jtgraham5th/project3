import React, { Component } from "react";
import axios from "axios";
import TopNav from "../components/TopNavbar";

class Newmenu extends Component {
  state = {
    Bar: "",
    Drinkname: "",
    Drinktype: "",
    Price: ""
  };

  handleChange = event => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSumbit = event => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("/api/NewMenu", this.state)
      .then(response => {
        console.log(response);
        if (response.data.error) {
          alert("failed to create menu item" + response.data.message);
        } else {
          this.props.history.push("/Bartender/");
        }
      })
      .catch(err => {
        console.log(err);
        alert("failed to create: " + err.message);
      });
  };

  render() {
    return (
      <div>
      <TopNav />
        <h1>This is for Bars to add to Menu</h1>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Bar"
              onChange={this.handleChange}
              name="Bar"
              value={this.state.Bar}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Drink-Name"
              onChange={this.handleChange}
              name="Drink-Name"
              value={this.state.Drinkname}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Year"
              onChange={this.handleChange}
              name="year"
              value={this.state.year}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Drink-Type"
              onChange={this.handleChange}
              name="Drink-Type"
              value={this.state.Drinktype}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Newmenu;
