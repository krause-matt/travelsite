import React from "react";
import "./hotelList.scss";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import format from "date-fns/format";

export const HotelList = () => {
  let location = useLocation();

  const [date, setDate] = useState(location.state.date);
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);

  return (
    <>
      <NavBar />
      <Header display="partial" />
      <div className="hotel-list">
        <div className="list-container">
          <div className="list-search">
            <h1 className="search-title">Search</h1>
            <div className="search-group">
              <span className="search-item">Destination</span>
              <input
                type="text"
                placeholder={destination}
                className="search-result"
              ></input>
              <span className="search-item">Dates</span>
              <span className="search-result">
                {format(date[0].startDate, "MM/dd/yy")} to{" "}
                {format(date[0].endDate, "MM/dd/yy")}
              </span>
            </div>
          </div>
          <div className="list-results"></div>
        </div>
      </div>
    </>
  );
};
