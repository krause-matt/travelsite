import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Subscribe } from "../components/Subscribe";
import "./hotel.scss";

export const Hotel = () => {
  return (
    <>
      <NavBar />
      <Header display="partial" />
      <Subscribe />
      <Footer />
    </>
  );
};
