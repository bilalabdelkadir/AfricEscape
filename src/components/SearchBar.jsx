import React from "react";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";

const SearchBar = ({setFilter}) => {
  // filter is implemented
  const [inp, setInp] = useState('')

  useEffect(() => {
    setFilter(RegExp(inp, 'i'))
  }, [inp])

  return (
    // made the form controlled form form filteration
    <div className="my-10 border border-gray-300 w-[90%] md:w-[50%] mx-auto p-1 md:p-1 rounded-full hover:border-green-600">
      <div className="flex justify-between pl-5 items-center ">
        <form className="w-[90%]">
          <input
            className="w-full h-full text-lg outline-none"
            type="search"
            placeholder="Search Your destination here"
            value={inp}
            onChange={({target}) => setInp(target.value)}
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
