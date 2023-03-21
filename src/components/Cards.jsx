import React, { useContext, useState, useEffect } from "react";
import { TourContext } from "../context/TourContext";
import Card from "./Card";
import { fetchTours } from "../utils/api";
import Spinner from "./Spinner";

const Cards = () => {
  const { tours, setTours } = useContext(TourContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getTours() {
      try {
        const toursData = await fetchTours();
        setTours(toursData);
        setIsLoading(false);
        console.log(toursData);
      } catch (error) {
        console.log(error);
      }
    }

    getTours();
  }, []);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="flex justify-center place-items-stretch flex-wrap max-w-[1200px] gap-4 mx-2 md:mx-auto">
        {tours.map((tour) => (
          <Card key={tour.id} tour={tour} />
        ))}
      </div>
    );
  }
};

export default Cards;
