import React from "react";
import { FiSearch } from "react-icons/fi";
const SearchBar = () => {
  return (
    <div className="my-10 border border-gray-300 w-[90%] md:w-[50%] mx-auto p-1 md:p-1 rounded-full">
      <div className="flex justify-between pl-5 items-center ">
        <form className="w-[90%]">
          <input
            className="w-full h-full text-lg outline-none"
            type="search"
            placeholder="Search Your destination here"
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
