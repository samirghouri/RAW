import React, { useEffect } from "react";
import "../../App.css";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <img className="each-image" src="images/img-2.jpg" alt="service-img" />
      <h1 className="title">SERVICES</h1>
    </div>
  );
};

export default Services;
