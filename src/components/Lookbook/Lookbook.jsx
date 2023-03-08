import React from "react";
import { useLocation } from "react-router-dom";
import "./Lookbook.css"

const Lookbook = () => {
  const location = useLocation();
  const { search } = location;
  const params = new URLSearchParams(search);
  const imageUrl = params.get("image");
  const title = params.get("title");

  return (
    <div className="lookbook">
      {imageUrl && title && (
        <div>
          <h2>{title}</h2>
          <img src={imageUrl} alt={title} />
        </div>
      )}
    </div>
  );
};

export default Lookbook;
