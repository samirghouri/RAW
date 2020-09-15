import React, { useEffect } from "react";
import "../../App.css";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <img className="each-image" src="images/img-1.jpg" alt="service-img" />
      <h1 className="title">PRODUCTS</h1>
    </div>
  );
};

export default Products;
