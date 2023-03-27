import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const Book = ({ id, token }) => {
  const [success, setSuccess] = useState(null);

  const bookHandler = async () => {
    try {
      // const response = await axios.post(
      //   `https://africescape-api.onrender.com/api/v1/bookings/${id}/myBooking`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //   }
      // );
      const response = await axios.post(
        `https://africescape-api.onrender.com/api/v1/bookings/${id}/myBooking`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess(true);
      console.log(response);
    } catch (error) {
      setSuccess(false);
      console.log(error);
    }
  };

  return (
    <div className="w-[90%] px-10 md:w-[80%] h-[10rem] new-shadow text-primary mt-10 rounded-xl flex flex-col items-center justify-center md:justify-around mx-auto md:items-center">
      <h1 className="text-lg md:text-2xl text-option text-center">
        WHAT ARE YOU WAITING FOR?
      </h1>
      <button
        onClick={bookHandler}
        className=" hover:bg-green-600 bg-primary w-3/4 md:w-1/4 text-white rounded-2xl py-2 px-5"
      >
        Book Now
      </button>
      {success === null && <></>}
      {success && (
        <div className="text-green-500 px-10 text-center my-2">
          <h1 className="text-lg md:text-2xl text-option text-center">
            Booking Successful
          </h1>
        </div>
      )}
      {success === false && (
        <div className="bg-red-200 my-2 px-10 text-red-500 text-center">
          <h1 className="text-lg md:text-2xl text-red-500 text-center">
            Booking Failed
          </h1>
        </div>
      )}
    </div>
  );
};

export default Book;
