import React, { Component } from "react";
import axios from "axios";
import BarAcceptOrderBtn from "../components/BarAcceptOrderBtn";
import BarCompleteOrderBtn from "../components/BarCompleteOrderBtn"
// import { Button } from 'reactstrap'

// import { Link } from "react-router-dom";

class Bartender extends Component {
  state = {
    orders: [],
    accepted: false,
    completed: false
  };

  componentDidMount() {
    axios
      .get("/bartender/orders")
      .then(response => {
        console.log(response);
        this.setState({
          orders: response.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
    // await console.log(this.state.drinks);
    this.setState({ loaded: true });
  };

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
  
  acceptOrder = (event) => {
    event.preventDefault(); 
    const orderId = event.target.id;
    let orders = this.state.orders;
    orders[orderId].accepted = true;
    this.setState({orders}, () => {
      console.log(this.state.orders);
    });
    // this.setState(state => {
      
    //   const list1 = state.orders.map((item, j) => {
    //     if (parseInt(orderId) === parseInt(j)) {
    //         item.accepted = true;
    //         console.log(item);
    //         return item;
    //     } else {
    //         return item;
    //     }
    //   });
    //   console.log(list1);
    //   return list1;
    //   // this.props.history.push("/summary");
    // });
  };
  
  completeOrder = event => {
    event.preventDefault();
    console.log(this.state.orders)
    const orderId = event.target.orderId;
    const index = event.target.id
    let orders = this.states.orders;
    orders[index].completed = true
    this.setState({orders});
    console.log(this.state.orders)

    axios
      .put(`/bartender/orders/${orderId}`, this.state.orders[index])
      .then(response => {
        console.log(response);
        if (response.data.error) {
          alert("Failed to create" + response.data.message);
        } else {
          this.props.history.push("/collection/" + response.data.data._id);
        }
      })
      .catch(err => {
        console.log(err);
      });      
    }
  
  
  // axios
  // .put(`/bartender/orders/${}`)
  // };
  

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
        <h1>Drinkson</h1>
        {this.state.orders.map((order,index) =>
        
        <div className="row-fluid" key={index}>
          <div>{order.accepted ?  (<div> 
          <div className="col">
          <h1>{order.name}</h1>
          </div>
            {order.order.map((drink, index) =>
            <div className="row border">
              <div className="col-md-2 border">
                <img
                  className="w-100"
                  src={drink.drinkThumb}
                  alt={drink.drinkName}
                />
              </div>
              <div className="col-md-5">
                <div className="row">
                  <h2>{drink.drinkName}</h2>
                <hr></hr>
                  <h4>{drink.instructions}</h4>
                </div>
              </div>
              <div className="col-md-3">
                {drink.ingredients.map((ingredient, i) => 
                    <div key={i}>
                      <div className="col">
                        <h5>{ingredient.measure}{" "}{ingredient.name}</h5>
                      </div>
                    </div>
                    )}
              </div>
            </div>
            )}<BarCompleteOrderBtn index={index} orderId={order._id} completeOrder={this.completeOrder}/>
            </div>) : (<BarAcceptOrderBtn orderName={order.name} numOfDrinks={order.order.length} index={index} acceptOrder={this.acceptOrder}
/>)}</div>
          </div>
        )}
        </div>
    )
  }
}

export default Bartender;
