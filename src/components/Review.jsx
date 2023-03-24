import React from "react";
import Natour from "../assets/nature_1.jpg";
import Rating from "./Rate";
import Slider from "react-slick";

const Review = ({ review }) => {
  const dateString = review.createdAt;
  const date = new Date(dateString);
  return (
    <div className="min-w-[20rem] max-w-[22rem] h-[25rem] new-shadow-2 m-4 p-4 flex flex-col items-center ">
      <div className="mb-4 flex justify-center items-center w-full">
        <img
          className="h-[10rem] w-[10rem] rounded-[50%] object-cover"
          src={Natour}
          alt="Mountain"
        />
      </div>
      <div className="w-full">
        <h1 className="text-3xl text-center font-bold">{review.user.name}</h1>
        <p className="text-gray-500 text-sm">{review.review}</p>
        <div>
          <p className="text-gray-500 text-sm">
            rated at: {date.getFullYear()} {date.getMonth() + 1}{" "}
            {date.getDate()} {date.getHours()}
          </p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <h1>{review.rating}</h1>
          <Rating rating={review.rating} />
        </div>
      </div>
    </div>
  );
};

export default Review;
