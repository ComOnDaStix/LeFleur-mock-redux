import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);


  return (
    <div className="navbar">
      <div className="links">
        <Link to="/products/1">SHOP</Link>
        <Link to="bottoms/products/2">BOTTOMS</Link>
        <Link to="/">
          <svg
            className="site-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 729.6 123.8"
          >
            <path d="M0,0H41.4V121.8H0V0Z"></path>
            <path d="M85.5,86.2c0,6.9,1.1,14.6,9.8,14.6,4.3,0,7.5-3,8.3-7h36.4c-5.4,20.5-24.5,30-44.1,30-26.8,0-49.4-13.8-49.4-43.1s19.9-45.8,47-45.8c30.3,0,52.2,19.5,50.1,51.4h-58.1v-.1Zm19.4-17.6c0-5.8-4.2-11.1-10.1-11.1-6.3,0-9.3,5.1-9.3,11.1h19.4Z"></path>
            <path d="M175,1h80.9V35.6h-36.7v12.5h32.2v31.4h-32.2v42.3h-44.2V1Z"></path>
            <path d="M263.5,1h43.9V83.1h36.9v38.8h-80.8V1h0Z"></path>
            <path d="M350.9,1h81.3V34h-37v11.5h33.8v31.4h-33.8v11.9h38.2v33h-82.5V1Z"></path>
            <path d="M551.6,1V72.5c0,35.3-22.1,51.3-55.9,51.3s-55.9-16-55.9-51.3V1h43.9V68.3c0,9.5,.3,17.8,12,17.8s12-8.3,12-17.8V1h43.9Z"></path>
            <path d="M559.8,1h53.1c27.2,0,50.3,11.5,50.3,42,0,18.3-7.1,26-23.4,31.4,0,0,3.2,1.9,7.4,8.2l26.3,39.3h-50.6c-7.1-16-15.7-38-20-38.8v38.8h-43V1h-.1Zm43,53.5h3c7.2,0,14.4-1.1,14.4-10.1s-6.6-10.4-14.1-10.4h-3.4v20.5h.1Z"></path>
            <path d="M729.6,26.8l-5.1-15.4-15.4,5.1V.3h-16.3V16.4l-15.2-5-5.1,15.4,15.2,5-9.4,12.6,13,9.7,9.4-12.6,9.4,12.6,13-9.7-9.3-12.4,15.8-5.2Z"></path>
          </svg>
        </Link>
        <Link to="/catalog/products/:id">CATALOG</Link>
        <div className="cartIcon" onClick={() => setOpen(!open)}>
          CART
          <span> ({products.length}) </span>
        </div>
      </div>
      {open && <Cart open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Navbar;