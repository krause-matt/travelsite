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
            <span>Adults + children</span>
          </div>
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};
