import React from "react";
import "../FeaturedProducts/FeaturedProducts.css";
import { Link } from "react-router-dom";
import Card from "../Card.jsx/Card";

const data = [
  {
    id: 1,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/WAVYPOCKETSHORTSBROWN01_360x.jpg?v=1670273939",
    title: "Wavy Pocket Shorts Brown",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/WAVYPOCKETSHORTSBLUE01_360x.jpg?v=1670273886",
    title: "Wavy Pocket Shorts Blue",
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/products/PLEATEDSHORTS01_360x.jpg?v=1670273722",
    title: "Double Pleated Shorts Khaki",
  },
];

const Bottoms = ({ item }) => {
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

export default Bottoms;
