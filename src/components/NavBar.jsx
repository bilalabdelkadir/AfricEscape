import React, { useState } from "react";
import { FiAlignRight, FiXCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="flex-nav z-50 new-shadow-2 fixed rounded-b-2xl left-0 right-0 top-0 w-full max-w-[1200px] py-4 px-10 mx-auto h-[4rem] bg-white">
        <div>
          <a
            className="font-bold select-none text-option text-[1.5rem]"
            href="/"
          >
            Afric
            <span className="font-bold select-none  text-[1.5rem] text-primary">
              Escape
            </span>
          </a>
        </div>
        <div className="hidden md:hidden text-sm lg:block ">
          <ul className="flex-centered w-full">
            <li className="px-4 hover-underline-animation ">
              <a href="/explore">Discover</a>
            </li>
            <li className="px-4 hover-underline-animation ">
              <a href="/Contact">Contact Us</a>
            </li>
            <li className="px-4 hover-underline-animation ">
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <Link
            to="/login"
            className="mx-3 text-sm btn border font-semibold border-primary hover:bg-primary ease-out duration-200 hover:text-white"
          >
            Log-In
          </Link>
          <Link
            to="/signup"
            className="mx-3 text-sm btn bg-primary text-white font-semibold hover:bg-opacity-50"
          >
            Sign-Up
          </Link>
        </div>
        <div
          className="cursor-pointer lg:hidden "
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <FiXCircle size={35} /> : <FiAlignRight size={35} />}
        </div>
      </nav>
      {showMenu && (
        <nav className="bg-white fixed right-0 gap-10 top-12 w-full md:w-[50%] h-full z-50 flex flex-col items-center">
          <div className="py-4 px-6">
            <ul className="flex flex-col mt-4 font-medium gap-4 ">
              <li className="py-2 border-b-2 border-border-color hover-underline-animation">
                <a href="/explore">Discover</a>
              </li>
              <li className="py-2 border-b-2 border-border-color">
                <a href="/Contact">Contact Us</a>
              </li>
              <li className="py-2 border-b-2 border-border-color">
                <a href="/about">About US</a>
              </li>
            </ul>
          </div>
          <div className="lg:hidden flex flex-col w-64">
            <button className="my-2 btn border font-semibold border-primary">
              Log-In
            </button>
            <button className="my-2 btn bg-primary text-white font-semibold">
              Sign-Up
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
