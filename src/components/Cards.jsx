import React, { useContext, useState, useEffect } from "react";
import { TourContext } from "../context/TourContext";
import Card from "./Card";
import Spinner from "./Spinner";

const Cards = ({filter}) => {
  
  // Refactored all scripts that are related to tours into tourContext
 
  const {isLoading, isError, status, data} = useContext(TourContext)

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    // If error happend, eadge case haddled
    return <div className="w-screen h-screen flex justify-center items-center">
            <span>Error happend while fetching data!</span>
          </div>
  }  else {
    // Implemented search function.. I tried to review Rawis API documentation.. But he
    // did not implement backend filteration so .. I made the filteration on the front end
    const tourToShow = data.filter(t => filter.test(t.name))
    if (!tourToShow.length) return <div className="flex justify-center bg-red-100 p-9 m-4 mb-72 mt-40 pb-12 text-lg">
         <span className="font-[600]">Sorry 😔. None was found! Try another filter!</span>
      </div>
    return (
      <div className="flex justify-center place-items-stretch flex-wrap max-w-[1200px] gap-4 mx-2 md:mx-auto">
        {tourToShow.map((tour) => (
          <Card key={tour.id} tour={tour} />
        ))}
      </div>
    );
  }
};

export default Cards;
