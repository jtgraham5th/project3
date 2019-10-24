import React, { Component } from "react";
import axios from "axios";




class Edit extends Component {
  state = {
    drinks: [],
    searchQuery: ""
  };

  componentDidMount(){
    console.log("hi this is working")
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
      <div>
        <h1>Edit Drinks</h1>
        <form>
          
        </form>
      </div>
    );
  }
}


export default Edit;