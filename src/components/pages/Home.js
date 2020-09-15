import React, { useEffect } from "react";
import Layout from "../Layout";
import "../../App.css";
import Cards from "../Cards";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout />
      <Cards />
    </>
  );
};

export default Home;
