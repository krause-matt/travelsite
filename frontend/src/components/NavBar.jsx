import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="sitename" style={{ textDecoration: "none" }}>
          Travelsite.com
        </Link>
        <div className="buttons">
          <button>Register</button>
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
};
