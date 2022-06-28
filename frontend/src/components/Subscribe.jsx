import React from "react";
import "./subscribe.scss";

export const Subscribe = () => {
  return (
    <div className="subscribe">
      <h1 className="subscribe-title">We look out for you</h1>
      <span className="subscribe-subtitle">
        Sign up for our mailing list and get deals straight to your inbox
      </span>
      <div className="subscribe-entry">
        <input
          className="subscribe-input"
          type="text"
          placeholder="Enter email"
        ></input>
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
};
