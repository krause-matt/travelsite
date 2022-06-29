import React from "react";
import "./home.scss";
import { NavBar } from "../components/NavBar";
import { Header } from "../components/Header";
import { Features } from "../components/Features";
import { Properties } from "../components/Properties";
import { Rentals } from "../components/Rentals";
import { Subscribe } from "../components/Subscribe";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <div className="features-container">
        <h1 className="title">Plan your next trip</h1>
        <Features />
        <h1 className="title">Choose by property</h1>
        <Properties />
        <h1 className="title">Great rental choices</h1>
        <Rentals />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};
