import React from "react";
import { FiSearch } from "react-icons/fi";
import PIC from "../assets/nature_1.jpg";
const SearchBar = () => {
  return (
    <div className="my-10 border-2 border-primary w-[90%] md:w-[50%] mx-auto p-1 md:p-1 rounded-full ">
      <div className="flex justify-between pl-5 items-center ">
        <form className="w-[90%]">
          <input
            className="w-full h-full text-2xl outline-none"
            type="search"
          />
        </form>
        <div className="bg-primary rounded-full p-2 sm:p-1 cursor-pointer">
          <FiSearch stroke="white" strokeWidth={3} size={35} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
