import React from "react";
import Card from "../Card.jsx/Card";
import { Link } from "react-router-dom";
import Lookbook from "../Lookbook/Lookbook";
import { useState } from "react";


const data = [
  {
    id: 1,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/solovair_CATALOG_360x.jpg?v=1671170868",
    title: "SOLOVIAR",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/ebbets_CATALOG_THUMBNAIL_360x.jpg?v=1670991967",
    title: "EBBETS",
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/FW_THUMBNAIL_360x.jpg?v=1670835550",
    title: "A FRAGRANCE BY",
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/bike_thumbnail_360x.jpg?v=1670637091",
    title: "PATALERS",
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/COLLECTION_1_CATALOG_THUMBNAIL_360x.jpg?v=1670401573",
    title: "COLLECTION 1",
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/GEORGIAPEACH_CATALOG_THUMBNAIL_360x.jpg?v=1670031739",
    title: "GEORGIA PEACH",
  },
  {
    id: 7,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/COCO_CATALOG_THUMBNAIL_360x.jpg?v=1670031629",
    title: "COCO WHITE",
  },
  {
    id: 8,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/SUNGLASSES_CATALOG_THUMBNAIL_360x.jpg?v=1670031271",
    title: "THE SUNSEEKERS",
  },
  {
    id: 9,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/PICKSOMETHING_CATALOG_THUMBNAIL_360x.jpg?v=1670031123",
    title: "PICK SOMETHING",
  },
  {
    id: 10,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/3MINUTES_CATALOG_THUMBNAIL_360x.jpg?v=1670031007",
    title: "THREE MINUTES",
  },
  {
    id: 11,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/FRESHFISH_THUMBNAIL_360x.jpg?v=1670030831",
    title: "FRESH FISH",
  },
  {
    id: 12,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/GLOBETROTTER_CATALOG_THUMBNAIL_360x.jpg?v=1670030377",
    title: "GLOBE-TROTTER",
  },
  {
    id: 13,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/WELCOMETOTHEDISCO_CATALOG_THUMBNAIL_300x300.jpg?v=1670018540",
    title: "WELCOME TO THE DISCO",
  },
  {
    id: 14,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/FRENCHWALTZ_CATALOG_THUMBNAIL_300x300.jpg?v=1670018268",
    title: "FRENCH WALTZ",
  },
  {
    id: 15,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0587/8179/4470/articles/WELCOMETOTHEDISCO_CATALOG_THUMBNAIL_4_300x300.jpg?v=1670018129",
    title: "STORE",
  },
];


const Catalog = ({ item }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  }

  return (
    <div className="FeaturedProducts">
      <div className="bottom">
        {data.map((item) => (
          <div key={item.id} onClick={() => handleItemClick(item)}>
            <Link
              to={{
                pathname: `/catalog/products/`,
                search: `?image=${item.imageUrl}&title=${item.title}`,
              }}
              state={{ item }}
            >
              <Card item={item} addToCart={false} />
            </Link>
          </div>
        ))}
      </div>
      <Lookbook selectedItem={selectedItem} />
    </div>
  );
};

export default Catalog;
