import React, { useState } from "react";
import { FiAlignRight, FiXCircle, FiUser, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { authState, logout } = useAuth();
  const { user, token } = authState;

  const logutHandler = () => {
    logout();
  };

  return (
    <>
      <nav className="flex-nav z-50 new-shadow-2 fixed rounded-b-2xl left-0 right-0 top-0 w-full max-w-[1200px] py-4 px-4 md:px-10 mx-auto h-[4rem] bg-white">
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
        <div className="hidden md:hidden text-sm lg:flex lg:justify-around lg:items-center ">
          <ul className="flex-centered">
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
          <div className="hidden lg:flex">
            {/* if there is logged user display hello user full name and logout */}
            {token ? (
              <div className="flex items-center">
                <Link
                  to="/profile"
                  className="rounded-full p-2 border-2 border-primary mx-2 hover:bg-green-200"
                >
                  <FiUser size={20} />
                </Link>
                <Link
                  onClick={() => logutHandler()}
                  className="rounded-full p-2 border-2 border-primary hover:bg-green-200"
                >
                  <FiLogOut size={20} />
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-end">
                <Link
                  to="/login"
                  className="mx-1 text-sm btn border font-semibold border-primary hover:bg-primary ease-out duration-200 hover:text-white"
                >
                  Log-In
                </Link>
                <Link
                  to="/signup"
                  className="mx-1 text-sm btn bg-primary text-white font-semibold hover:bg-opacity-50"
                >
                  Sign-Up
                </Link>
              </div>
            )}
          </div>
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
            {token ? (
              <div className="flex items-center">
                <Link
                  to="/profile"
                  className="rounded-full p-2 border-2 border-primary mx-2 hover:bg-green-200"
                >
                  <FiUser size={20} />
                </Link>
                <Link
                  onClick={() => logutHandler()}
                  className="rounded-full p-2 border-2 border-primary hover:bg-green-200"
                >
                  <FiLogOut size={20} />
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-end">
                <Link
                  to="/login"
                  className="mx-1 text-sm btn border font-semibold border-primary hover:bg-primary ease-out duration-200 hover:text-white"
                >
                  Log-In
                </Link>
                <Link
                  to="/signup"
                  className="mx-1 text-sm btn bg-primary text-white font-semibold hover:bg-opacity-50"
                >
                  Sign-Up
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
