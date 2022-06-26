import React from "react";
import "./home.scss";
import { NavBar } from "../components/NavBar";
import { Header } from "../components/Header";
import { Features } from "../components/Features";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <div className="features-container">
        <Features />
      </div>
    </>
  );
};
