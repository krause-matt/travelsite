import React from "react";
import "./hotelList.scss";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";

export const HotelList = () => {
  return (
    <>
      <NavBar />
      <Header display="partial" />
    </>
  );
};
