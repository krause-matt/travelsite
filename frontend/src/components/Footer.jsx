import React from "react";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <ul className="footer-list">
          <li className="footer-item">Countries</li>
          <li className="footer-item">Regions</li>
          <li className="footer-item">Cities</li>
          <li className="footer-item">Districts</li>
          <li className="footer-item">Airports</li>
          <li className="footer-item">Hotels</li>
          <li className="footer-item">Places of interest</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-item">Homes</li>
          <li className="footer-item">Apartments</li>
          <li className="footer-item">Resorts</li>
          <li className="footer-item">Villas</li>
          <li className="footer-item">Hostels</li>
          <li className="footer-item">B&Bs</li>
          <li className="footer-item">Guest houses</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-item">Unique places to stay</li>
          <li className="footer-item">All destinations</li>
          <li className="footer-item">Discover</li>
          <li className="footer-item">Reviews</li>
          <li className="footer-item">Unpacked: Travel articles</li>
          <li className="footer-item">Travel communities</li>
          <li className="footer-item">Seasonal and holiday deals</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-item">Car rental</li>
          <li className="footer-item">Flight finder</li>
          <li className="footer-item">Restaurant reservations</li>
          <li className="footer-item">Travel agents</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-item">Coronavirus (COVID-19) FAQs</li>
          <li className="footer-item">About Travelsite.com</li>
          <li className="footer-item">Customer Service</li>
          <li className="footer-item">Careers</li>
          <li className="footer-item">Sustainability</li>
          <li className="footer-item">Press</li>
          <li className="footer-item">Safety Resource Center</li>
        </ul>
      </div>
      <div className="footer-copyright">Copyright © 2022 Travelsite.com™.</div>
    </div>
  );
};
