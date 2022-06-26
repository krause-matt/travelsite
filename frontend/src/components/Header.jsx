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
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";
import { useState } from "react";

export const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [calendarShow, setCalendarShow] = useState(false);
  const [optionsShow, setOptionsShow] = useState(false);

  const [options, setOptions] = useState({
    adults: 0,
    children: 0,
    rooms: 0,
  });

  const optionButton = (option, valueChange) => {
    setOptions((prevState) => ({
      ...prevState,
      [option]:
        valueChange === "increase"
          ? options[option] + 1
          : options[option] > 0
          ? options[option] - 1
          : 0,
    }));
  };

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
            <FontAwesomeIcon icon={faHotel} className="search-icon" />
            <input type="text" placeholder="Destination"></input>
          </div>
          <div className="search-item">
            <FontAwesomeIcon icon={faCalendarAlt} className="search-icon" />
            <span
              onClick={() => {
                setCalendarShow(!calendarShow);
              }}
            >
              {format(date[0].startDate, "MM/dd/yy")} to{" "}
              {format(date[0].endDate, "MM/dd/yy")}
            </span>
            {calendarShow && (
              <DateRange
                className="calendar"
                onChange={(item) => setDate([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={date}
                direction="horizontal"
              />
            )}
          </div>
          <div className="search-item">
            <FontAwesomeIcon icon={faPerson} className="search-icon" />
            <span
              onClick={() => setOptionsShow(!optionsShow)}
            >{`${options.adults} Adults | ${options.children} Children | ${options.rooms} Room`}</span>
            {optionsShow && (
              <div className="options">
                <div className="option-item">
                  <span className="option-text">Adults</span>
                  <div className="option-select">
                    <button
                      className="option-button"
                      onClick={() => optionButton("adults", "decrease")}
                    >
                      -
                    </button>
                    <span className="option-display">{options.adults}</span>
                    <button
                      className="option-button"
                      onClick={() => optionButton("adults", "increase")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="option-item">
                  <span className="option-text">Children</span>
                  <div className="option-select">
                    <button
                      className="option-button"
                      onClick={() => optionButton("children", "decrease")}
                    >
                      -
                    </button>
                    <span className="option-display">{options.children}</span>
                    <button
                      className="option-button"
                      onClick={() => optionButton("children", "increase")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="option-item">
                  <span className="option-text">Rooms</span>
                  <div className="option-select">
                    <button
                      className="option-button"
                      onClick={() => optionButton("rooms", "decrease")}
                    >
                      -
                    </button>
                    <span className="option-display">{options.rooms}</span>
                    <button
                      className="option-button"
                      onClick={() => optionButton("rooms", "increase")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};
