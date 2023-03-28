import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { useState } from "react";

const Home = () => {
  // implemted filtering 
  const [filt, setFilter] = useState(/(?:)/);
  return (
    <div className=" mx-auto">
      <NavBar />
      <Hero />
      <SearchBar setFilter={setFilter} />
      <Cards filter={filt} />
      <Footer />
    </div>
  );
};

export default Home;
