import React from "react";
import "./home.scss";
import { NavBar } from "../components/NavBar";
import { Header } from "../components/Header";
import { Features } from "../components/Features";
import { Properties } from "../components/Properties";

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
      </div>
    </>
  );
};
