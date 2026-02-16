import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div
      className="
        offers 
        w-[90%] sm:w-[85%] md:w-[70%] lg:w-[65%] 
        min-h-[60vh] sm:min-h-[65vh] md:min-h-[62vh] lg:min-h-[60vh] 
        flex flex-col md:flex-row 
        mx-auto 
        px-4 sm:px-6 md:px-12 lg:px-16 
        py-8 sm:py-10 md:py-12 lg:py-16 
        mb-24 sm:mb-28 md:mb-36 lg:mb-[150px] 
        bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]
        rounded-lg
      "
    >
      {/* Left Section */}
      <div
        className="
          offers-left 
          flex-1 flex flex-col 
          justify-center items-center md:items-start 
          text-center md:text-left 
          gap-4 sm:gap-5 md:gap-6 lg:gap-8
        "
      >
        <h1 className="text-[#171717] text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-semibold leading-snug">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-semibold leading-snug">
          Offers For You
        </h1>
        <p className="text-[#171717] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mt-2 sm:mt-3 md:mt-4 lg:mt-5">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button
          className="
            w-[200px] sm:w-[240px] md:w-[265px] lg:w-[282px] 
            h-[50px] sm:h-[60px] md:h-[68px] lg:h-[70px] 
            rounded-[25px] sm:rounded-[30px] md:rounded-[33px] lg:rounded-[35px] 
            bg-[#ff4141] text-white font-medium 
            mt-4 sm:mt-5 md:mt-6 lg:mt-7 
            hover:opacity-90 transition 
          "
        >
          Check Now
        </button>
      </div>

      {/* Right Section */}
      <div
        className="
          offers-right 
          flex-1 flex 
          items-center justify-center md:justify-end 
          mt-6 md:mt-0
        "
      >
        <img
          className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-auto rounded-lg"
          src={exclusive_image}
          alt="offer"
        />
      </div>
    </div>
  );
};

export default Offers;
