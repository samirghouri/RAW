import React from "react";
import Button from "./Buttons";
import "./Layout.css";
import "../App.css";
const Layout = () => {
  return (
    <div className="layout-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>LET'S EXPLORE</h1>
      <p>Never fear quarrels, but seek hazardous adventures.</p>
      <div className="layout-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default Layout;
