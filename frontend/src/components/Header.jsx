import React from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faHotel,
  faParachuteBox,
  faPlaneDeparture,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="list">
          <div className="list-item">
            <FontAwesomeIcon icon={faHotel} />
            <span className="description">Hotels</span>
          </div>
          <div className="list-item">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <span className="description">Flights</span>
          </div>
          <div className="list-item">
            <FontAwesomeIcon icon={faCarSide} />
            <span className="description">Cars</span>
          </div>
          <div className="list-item">
            <FontAwesomeIcon icon={faParachuteBox} />
            <span className="description">Entertainment</span>
          </div>
          <div className="list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span className="description">Taxi</span>
          </div>
        </div>
      </div>
    </div>
  );
};
