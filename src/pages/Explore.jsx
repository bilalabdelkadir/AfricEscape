import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Explore = () => {
  return (
    <div className=" mx-auto">
      <NavBar />
      <div className="my-24">
        <SearchBar />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
