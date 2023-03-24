import React from "react";

const Book = () => {
  return (
    <div className="w-[90%] px-10 md:w-[80%] h-[10rem] new-shadow text-primary mt-10 rounded-xl flex flex-col items-center justify-center md:justify-around mx-auto md:items-center">
      <h1 className="text-lg md:text-2xl text-option text-center">
        WHAT ARE YOU WAITING FOR?
      </h1>
      <button className=" hover:bg-green-600 bg-primary w-3/4 md:w-1/4 text-white rounded-2xl py-2 px-5">
        Book Now
      </button>
    </div>
  );
};

export default Book;
