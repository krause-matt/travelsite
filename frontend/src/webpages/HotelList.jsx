import React from "react";
import "./hotelList.scss";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import format from "date-fns/format";
import { DateRange } from "react-date-range";

export const HotelList = () => {
  let location = useLocation();

  const [date, setDate] = useState(location.state.date);
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [calendarShow, setCalendarShow] = useState(false);

  return (
    <>
      <NavBar />
      <Header display="partial" />
      <div className="hotel-list">
        <div className="list-container">
          <div className="list-search">
            <h1 className="search-title">Search</h1>
            <div className="search-group">
              <div className="search-item">Destination</div>
              <input
                type="text"
                placeholder={destination}
                className="search-result"
              ></input>
              <div className="search-item">Dates</div>
              <span
                className="search-result"
                onClick={() => setCalendarShow(!calendarShow)}
              >
                {format(date[0].startDate, "MM/dd/yy")} to{" "}
                {format(date[0].endDate, "MM/dd/yy")}
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
              </span>
            </div>
          </div>
          <div className="list-results"></div>
        </div>
      </div>
    </>
  );
};
