import React from "react";
import "../FeaturedProducts/FeaturedProducts";
import { Link } from "react-router-dom";
import Card from "../Card.jsx/Card";
import "./FeaturedProducts.css"

const data = [
  {
    id: 1,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/PETALERSSHIRTPINK01_540x.jpg?v=1670285268",
    title: "Petalers Chinstitch Button Up Pink",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/PETALERSSHIRTGREEN01_360x.jpg?v=1670285205",
    title: "Petalers Chinstitch Button Up Mint",
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/CALLMESCHOTTJACKETGREEN01_360x.jpg?v=1670456165",
    title: "Call Me Leather Work Jacket Green",
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/CALLMESCHOTTJACKETCREAM01_360x.jpg?v=1670456130",
    title: "  Call Me Leather Work Jacket Cream",
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/RICOPUFFERBROWN01_360x.jpg?v=1670456047",
    title: " Rico Puffer Jacket Brown",
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/RICOPUFFERORANGE01_360x.jpg?v=1670271550",
    title: "  Rico Puffer Jacket Orange",
  },
  {
    id: 7,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/WAVYPOLORED01_360x.jpg?v=1670274468",
    title: "Wavy Strip Knit Polo Red",
  },
  {
    id: 8,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/WAVYPOLOGREEN01_360x.jpg?v=1670274565",
    title: "Wavy Strip Knit Polo green",
  },
  {
    id: 9,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/CALLMESILKSHIRTBLUE01_360x.jpg?v=1670270187",
    title: "Call Me Long Sleeve Button Up Blue",
  },
  {
    id: 10,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/CALLMESILKSHIRTORANGE01_360x.jpg?v=1670270312",
    title: "Call Me Long Sleeve Button Up Orange",
  },
  {
    id: 11,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/DIGILEOPARDSHIRTORANGE01_360x.jpg?v=1670273377",
     title: "Digi Leopard Button Up",
  },
];

const FeaturedProducts = ({ item }) => {
  return (
    <div className="FeaturedProducts">
      <div className="bottom">
        {data.map((item) => (
          <Link
            to={{
              pathname: `/product/${item.id}`,
              search: `?image=${item.imageUrl}&title=${item.title}`,
            }}
            state={{ item }}
          >
            <Card item={item} key={item.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
