import React from "react";
import "./navbar.scss";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="sitename">Travelsite</div>
        <div className="buttons">
          <button>Register</button>
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
};
