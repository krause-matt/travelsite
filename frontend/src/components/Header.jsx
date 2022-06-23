import React from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCarSide,
  faHotel,
  faParachuteBox,
  faPerson,
  faPlaneDeparture,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="list">
          <div className="list-item active">
            <FontAwesomeIcon icon={faHotel} />
            <span className="item-description">Hotels</span>
          </div>
          <div className="list-item">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <span className="item-description">Flights</span>
          </div>
          <div className="list-item">
            <FontAwesomeIcon icon={faCarSide} />
            <span className="item-description">Cars</span>
          </div>
          <div className="list-item">
            <FontAwesomeIcon icon={faParachuteBox} />
            <span className="item-description">Entertainment</span>
          </div>
          <div className="list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span className="item-description">Taxi</span>
          </div>
        </div>
        <h1 className="title">Travelsite Title</h1>
        <p className="site-description">Travelsite description</p>
        <button className="header-button">Sign In</button>
        <div className="search">
          <div className="search-item">
            <FontAwesomeIcon icon={faHotel} />
            <input type="text" placeholder="Destination" />
          </div>
          <div className="search-item">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>Date range</span>
          </div>
          <div className="search-item">
            <FontAwesomeIcon icon={faPerson} />
            <span>Adults + children</span>
          </div>
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};