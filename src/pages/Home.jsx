import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className=" mx-auto">
      <NavBar />
      <Hero />
      <SearchBar />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
