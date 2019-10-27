import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function CheckoutBtn(props) {
  return (
    <div>
      <a href="/edit">
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block fixed-bottom"
          onClick={props.handleFormSubmit}
        >
          Checkout
        </button>
      </a>
    </div>
  );
}

export default CheckoutBtn;
