import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-t-xl new-shadow mx-auto mt-4 text-primary">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-around">
          <a href="/" className="flex justify-center items-center mb-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              AfricEscape
            </span>
          </a>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/licensing" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="flex items-center justify-center text-sm text-gray-500 sm:text-center ">
          ©
          <a href="/" className="hover:underline">
            AfricEscape™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
