import "./searchResult.scss";
import React from "react";

export const SearchResult = () => {
  return (
    <div className="search-result">
      <img
        src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        className="sr-image"
      />
      <div className="sr-description">
        <h1 className="sr-title">Black Oak Suites</h1>
        <span className="sr-distance">3 miles from search zip code</span>
        <span className="sr-perk">Airport shuttle available</span>
        <span className="sr-bed">1 King Bed</span>
        <span className="sr-cancel">Free cancellation</span>
        <span className="sr-pitch">
          Earn 2X rewards points if you book today!
        </span>
      </div>
      <div className="sr-numbers">
        <div className="sr-rating">
          <span className="sr-review">Great</span>
          <span className="sr-score">8.5</span>
        </div>
        <div className="sr-info">
          <span className="sr-price">$119</span>
          <span className="sr-taxes">Taxes/fees incl.</span>
          <button className="sr-button">Check vacancies</button>
        </div>
      </div>
    </div>
  );
};
