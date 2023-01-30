// Item product pages
import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function Item({ location }) {
  const { state } = location;
  console.log(state);
  if (!state) {
    window.location = "/";
  }
  return (
    <div className="itemContainer">
      <div className="itemLeft">
        <img src={state.image} />
      </div>
      <div className="itemRight">
        <p className="itemTitle">{state.title}</p>
        <p className="itemPrice">${state.price}</p>

        {state.category !== "jewelery" && (
          <div className="itemSize">
            <p>Size:</p>
            <select>
              <option>Please select </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
        )}
        {/* <p className="itemDetails"> Product Details</p> */}
        <button className="itemButton">
          <a>Add to Bag</a>
        </button>
        <div className="itemShip">
          <FaShippingFast />
          <a>Free Shipping Over $99 </a>
        </div>
        <div className="itemDetails">
          <p>Product Details</p>
          <p>
            <FaPlus />
          </p>
        </div>
        {/* {state.description} */}
      </div>
    </div>
  );
}

export default Item;
