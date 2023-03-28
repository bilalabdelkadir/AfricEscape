import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <img
              src="/images/about-us.jpg"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, erat in malesuada aliquam, est erat faucibus purus,
              eget viverra nulla sem vitae neque. Quisque id sodales libero. In
              nec enim nisi. Nullam quis augue ligula. Nulla facilisi.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Nam blandit, velit eget commodo dignissim,
              sem nibh laoreet ipsum, vel tincidunt ligula enim vitae purus.
              Etiam sed nibh feugiat, condimentum ipsum nec, faucibus odio.
              Donec euismod vestibulum massa, ac volutpat libero ornare non.
              Nullam eget velit ante. Praesent placerat sapien mauris, vitae
              sodales tellus venenatis ac. Nullam vel justo vitae massa
              ullamcorper euismod. Nulla facilisi. Sed ut erat ligula. Nam
              tincidunt vestibulum libero, non fringilla enim faucibus sed. Sed
              eu scelerisque dui. Sed eu arcu at nibh hendrerit viverra. Vivamus
              facilisis volutpat odio, ac tempor velit efficitur et. Sed
              vestibulum, felis quis pharetra tincidunt, nunc libero bibendum
              massa, in faucibus dolor lorem vitae metus. Sed nec nulla
              dignissim, bibendum velit eget, ultrices elit. Sed euismod
              tincidunt nisl, ac vestibulum elit vehicula eu. Sed euismod
              tincidunt nisl, ac vestibulum elit vehicula eu.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Sed euismod tincidunt nisl, ac vestibulum elit vehicula eu. Sed
              euismod tincidunt nisl, ac vestibulum elit vehicula eu. Sed
              vestibulum, felis quis pharetra tincidunt, nunc libero bibendum
              massa, in faucibus dolor lorem vitae metus. Sed nec nulla
              dignissim, bibendum velit eget, ultrices elit. Sed euismod
              tincidunt nisl, ac vestibulum elit vehicula eu. Sed euismod
              tincidunt nisl, ac vestibulum elit vehicula eu. Sed vestibulum,
              felis quis pharetra tincidunt, nunc libero bibendum massa, in
              faucibus dolor lorem vitae metus. Sed nec nulla dignissim,
              bibendum velit eget, ultrices elit. Sed euismod tincidunt nisl, ac
              vestibulum elit vehicula eu. Sed euismod tincidunt nisl, ac
              vestibulum elit vehicula eu.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
