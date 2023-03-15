import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="main-bg">
      <NavBar />
      <Hero />
      <SearchBar />
    </div>
  );
};

export default Home;
