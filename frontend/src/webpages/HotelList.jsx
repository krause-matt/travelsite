import React from "react";
import "./hotelList.scss";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";

export const HotelList = () => {
  return (
    <>
      <NavBar />
      <Header display="partial" />
      <div className="hotel-list">
        <div className="list-container">
          <div className="list-search">
            <h1 className="search-title">Search</h1>
            <div className="search-group">
              <span>Destination</span>
              <input type="text" placeholder="text"></input>
            </div>
          </div>
          <div className="list-results"></div>
        </div>
      </div>
    </>
  );
};
