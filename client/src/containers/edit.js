import React, { Component } from "react";
import axios from "axios";




class Edit extends Component {
  state = {
    drinks: [],
    searchQuery: ""
  };

  componentDidMount(){
    console.log(this.props.match.params.id);
    this.getdrinkbyID();
  }

  getdrinkbyID = () => {
    axios
    .get("/api/drinks/" + this.props.match.params.id)
    .then(drinks => {
      console.log(drinks);
      this.setState({
        model: drinks.data.data.model,
          color: drinks.data.data.color,
          year: drinks.data.data.year,
          imageURL: drinks.data.data.imageURL,
          _id: drinks.data.data._id
      });
    })
    .catch(err =>{
      console.log(err);
    });
  }
  render() {
    return (
      <div className="container">
      <div className="row">
        <h1>This is the edit page</h1>
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <form>
            <div className="form-group">
              <label htmlFor="drink">Drink ID</label>
              <input
                className="form-control"
                type="text"
                name="Drink ID"
                placeholder="Drink"
                value={this.state.model}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="color">Drink Name</label>
              <input
                className="form-control"
                type="text"
                name="Drink Name"
                placeholder="Color"
                value={this.state.color}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="year">Ingredient 1</label>
              <input
                className="form-control"
                type="number"
                name="year"
                placeholder="Year"
                value={this.state.year}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="imageURL">Drink</label>
              <input
                className="form-control"
                type="text"
                name="imageURL"
                placeholder="Image URL"
                value={this.state.imageURL}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.handleSubmit}>
                Submit Changes
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
    );
  }
}


export default Edit;