import React, { useEffect } from "react";
import "../../App.css";

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <img className="each-image" src="images/img-8.jpg" alt="service-img" />
      <h1 className="title">SIGN UP</h1>
    </div>
  );
};

export default SignUp;
