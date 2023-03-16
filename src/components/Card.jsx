import React, { useState } from "react";
import Slider from "react-slick";
import Nature_1 from "../assets/nature_1.jpg";
import Nature_2 from "../assets/nature_2.jpg";
import Nature_3 from "../assets/nature_3.jpg";
import Nature_4 from "../assets/nature_4.jpg";
import { FiHeart, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link
      to="/"
      className="sm:w-[47%] xs:w-[90%] md:w-[32%] lg:w-[24%] shadow-lg overflow-hidden rounded-lg"
    >
      <div>
        <img
          className="w-full h-full object-cover"
          src={Nature_2}
          alt="Mountain"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-start w-full h-full items-center border-b-2">
          <div className="w-[80%] my-2">
            <div className="flex justify-start">
              <p>Region: </p>
              <p>Afar</p>
            </div>
            <div className="flex justify-start">
              <p>City: </p>
              <p>Abala</p>
            </div>
          </div>
          <div className="flex justify-start items-center my-2">
            <FiStar className="mx-1" />
            <p>4.7</p>
          </div>
        </div>
        <h1 className="font-semibold text-xl">Abala Volcano</h1>
        <div>
          <p className="font-[400] text-gray-400 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            numquam laboriosam ex non commodi rerum, praesentium.
          </p>
        </div>
      </div>
      <div className="w-full">
        <p className="mt-2 px-4 h-[3rem] flex-nav bg-gray-100 backdrop-blur-lg">
          Estimated Price $250 - $350
        </p>
      </div>
    </Link>
  );
};

export default Card;
