import React from "react";
import Slider from "react-slick";
import Nature_1 from "../assets/nature_1.jpg";
import Nature_2 from "../assets/nature_2.jpg";
import Nature_3 from "../assets/nature_3.jpg";
import Nature_4 from "../assets/nature_4.jpg";

const Hero = () => {
  const settings = {
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="flex items-center overflow-hidden w-full pt-40 max-w-[1200px] mx-auto flex-wrap justify-between">
      <div className="w-full lg:w-[50%] text-center lg:text-left p-10">
        <h1 className="font-bold text-5xl md:text-6xl mb-4 md:mb-2  lg:mb-5">
          Journey to Unforgettable Places
        </h1>
        <h1 className="font-amharic font-bold text-4xl md:text-5xl mb-5 lg:mb-5">
          ጉዞ የማይረሱ ቦታዎች
        </h1>
        <p className="font-light">
          more than 100 destination to choose from get started now
        </p>
      </div>
      <div className="w-full lg:w-[50%] text-center p-10 bg-option backdrop-blur-md rounded-[1rem]">
        <Slider {...settings}>
          <div className="w-full h-[20rem">
            <img
              className="w-full  h-full object-cover"
              src={Nature_1}
              alt="Mountain"
            />
          </div>
          <div className="w-full h-[20rem] ">
            <img
              className="w-full h-full object-cover"
              src={Nature_2}
              alt="Mountain"
            />
          </div>
          <div className="w-full h-[20rem] ">
            <img
              className="w-full h-full object-cover"
              src={Nature_3}
              alt="Mountain"
            />
          </div>
          <div className="w-full h-[20rem] ">
            <img
              className="w-full h-full object-cover"
              src={Nature_4}
              alt="Mountain"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
