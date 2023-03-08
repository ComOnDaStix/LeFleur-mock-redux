import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/CartReducer";
import "./Product.css";

const Product = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  const state = location.state;

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setImage(searchParams.get("image"));
    setTitle(searchParams.get("title"));
  }, [location]);

  console.log(state);

  return (
    <div className="product">
      <div className="product-title">
        <h1>{title}</h1>
      </div>
      <div className="main-image">
        <img src={image} alt={title} />
        <button
          className="add-to-cart-btn-product"
          onClick={() =>
            dispatch(
              addToCart({
                id: state?.item.id,
                title: state?.item.title,
                imageUrl: state?.item.imageUrl,
                quantity,
              })
            )
          }
        >
          Add To Cart
        </button>
        <div className="quantity">
          <button className="quantity-button" onClick={handleDecrement}>
            -
          </button>
          <span className="number">{quantity}</span>
          <button className="quantity-button" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
