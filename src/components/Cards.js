import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these amazing destinatioon</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore yourself with the Water Fall and Jungle."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Explore the oceans of Bali in a private cruise"
              label="luxury"
              path="/services"
            />
          </ul>
          <ul className="cards--items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Fooball on Top of the Himalayas"
              label="luxury"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour
              "
              label="luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
