import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ item, addToCart }) => {
 
  return (
   
    <div className="card">
      <div className="images">
        <img src={item?.imageUrl} alt="" />
        {addToCart && <button className="add-to-cart-btn">Add To Cart</button>}
      </div>
      <h2>{item?.title}</h2>
    </div>

  
  );
};

export default Card;
