import React from "react";
import "./features.scss";

export const Features = () => {
  return (
    <div className="features">
      <div className="feature-item">
        <img
          className="feature-image"
          src="https://images.unsplash.com/photo-1575380591643-b2c92368dc6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2FnbyUyMHNreWxpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <div className="feature-description">
          <span className="feature-title">Chicago</span>
          <span className="feature-count">5 properties</span>
        </div>
      </div>
      <div className="feature-item">
        <img
          className="feature-image"
          src="https://images.unsplash.com/photo-1561063139-e183e66909c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFtcGElMjBza3lsaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <div className="feature-description">
          <span className="feature-title">Tampa</span>
          <span className="feature-count">3 properties</span>
        </div>
      </div>
      <div className="feature-item">
        <img
          className="feature-image"
          src="https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVzdGluJTIwc2t5bGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <div className="feature-description">
          <span className="feature-title">Austin</span>
          <span className="feature-count">7 properties</span>
        </div>
      </div>
    </div>
  );
};
