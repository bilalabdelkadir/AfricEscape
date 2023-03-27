import React, { useState } from "react";
import Nature_3 from "../assets/nature_3.jpg";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ tour }) => {
  return (
    <Link
      to={`/tours/${tour.slug}/${tour.id}`}
      className="sm:w-[47%] relative xs:w-[90%] md:w-[30%] shadow-lg lg:w-[27%] lg:m-4 new-shadow  overflow-hidden rounded-lg md:h-[27rem] h-[30rem]"
    >
      {/* here added zoom effect on the image that are on the cards */}
      <div className="h-[45%]">
        <img
          className="w-full h-full object-cover hover:scale-110 duration-300"
          src={
            `https://africescape-api.onrender.com/img/tours/${tour.imageCover}` ||
            Nature_3
          }
          alt="Mountain"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-start w-full h-full items-center border-b-2">
          {/* <div className="w-[80%] my-2">
            <div className="flex justify-start">
              <p>Region: </p>
              <p>Afar</p>
            </div>
            <div className="flex justify-start">
              <p>City: </p>
              <p>Abala</p>
            </div>
          </div> */}
          <div className="flex justify-start items-center my-2">
            <FiStar className="mx-1" />
            <p>{tour.ratingsAverage}</p>
          </div>
        </div>
        <h1 className="font-semibold mt-4 text-xl">{tour.name}</h1>
        <div>
          <p className="font-[400] text-gray-600 text-sm pb-6">
            {tour.summary}
          </p>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <p className="mt-2 px-4 h-[3rem] flex-nav bg-green-100 backdrop-blur-lg">
          Estimated Price ${tour.price}
        </p>
      </div>
    </Link>
  );
};

export default Card;
