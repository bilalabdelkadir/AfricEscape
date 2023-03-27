import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { useState } from "react";

const Explore = () => {
  // another filter for the discover page
  const [filt, setFilter] = useState(/(?:)/);
  return (
    <div className=" mx-auto">
      <NavBar />
      <div className="my-24">
        <SearchBar setFilter={setFilter} />
        <Cards filter={filt} />
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
