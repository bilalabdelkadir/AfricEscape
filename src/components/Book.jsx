import React from "react";

// move request to utils/api.js
import { bookTour } from "../utils/api";
import Spinner from "./Spinner";

// add react query for isLoading isError feature
import { useMutation } from "react-query";
import { useAuth } from "../Hooks/useAuth";

// for navigating the user to login page if the user tried to book but not logged in
import { useNavigate } from "react-router-dom";

const Book = ({ id, token }) => {
  // react quesry mutate declaration..
  let { mutate, status, isLoading, error } = useMutation(
    () => bookTour(id, token),
    {
      onSuccess: (res) => {
        console.log("booking was succeful");
        console.log(res);
      },
      // Error handling
      onError: (error) => {
        console.log(error.response.data.error, 5);
        console.log("error happend");
      },
    }
  );
  const { authState } = useAuth();
  const navigate = useNavigate();

  console.log(status, "the status");
  console.log(error, "the error");
  const bookHandler = () => {
    if (authState.token) {
      // only book if user is logged in
      mutate();
    } else {
      // other wise navigate user to login page
      navigate("/login");
    }
  };

  return (
    <div className="w-[90%] px-10 md:w-[80%] h-[10rem] new-shadow text-primary mt-10 rounded-xl flex flex-col items-center justify-center md:justify-around mx-auto md:items-center">
      <h1 className="text-lg md:text-2xl text-option text-center">
        WHAT ARE YOU WAITING FOR?
      </h1>
      <button
        onClick={bookHandler}
        className=" hover:bg-green-600  bg-primary w-3/4 md:w-1/4 text-white rounded-2xl py-2 px-5"
      >
        {/* react query mutation isLoading used  */}
        {!isLoading ? (
          <span className="text-white">Book Now</span>
        ) : (
          <Spinner />
        )}
      </button>
      {status === "idle" && <></>}
      {status === "success" && (
        <div className="text-green-500 px-10 text-center my-2">
          <h1 className="text-lg md:text-2xl text-option text-center">
            Booking Successful
          </h1>
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-200 my-2 px-10 text-red-500 text-center">
          <h1 className="text-lg md:text-2xl text-red-500 text-center">
            Booking Failed
          </h1>
        </div>
      )}
      {/* remind the user if the user is not logged in */}
      {!authState.token && (
        <div className="bg-gray-50 my-2 px-10 text-red-500 text-center">
          <h1 className="text-black text-center">
            You need to signin to book tour
          </h1>
        </div>
      )}
    </div>
  );
};

export default Book;
