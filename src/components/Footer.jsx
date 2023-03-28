import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white rounded-t-xl new-shadow mx-auto mt-4 text-primary">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-around">
          <Link
            to="/"
            className="flex justify-center items-center mb-4 sm:mb-0"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              AfricEscape
            </span>
          </Link>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
            <li>
              <Link to href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link
                to
                href="/privacy-policy"
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to
                href="/licensing"
                className="mr-4 hover:underline md:mr-6 "
              >
                Licensing
              </Link>
            </li>
            <li>
              <Link to href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="flex items-center justify-center text-sm text-gray-500 sm:text-center ">
          ©
          <Link to href="/" className="hover:underline">
            AfricEscape™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
