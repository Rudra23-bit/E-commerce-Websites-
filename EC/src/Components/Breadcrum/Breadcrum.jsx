import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = ({ product }) => {
  return (
    <div className="w-full bg-white">

      <div className="max-w-[1200px] mx-auto 
                      px-4 sm:px-6 lg:px-8
                      py-6 sm:py-8
                      text-[#5e5e5e] 
                      font-semibold
                      text-[12px] sm:text-[14px] md:text-[16px]
                      flex flex-wrap items-center gap-2 capitalize">

        <span>Home</span>
        <img className="w-4 h-4 opacity-70" src={arrow_icon} alt="" />

        <span>Shop</span>
        <img className="w-4 h-4 opacity-70" src={arrow_icon} alt="" />

        <span>{product.category}</span>
        <img className="w-4 h-4 opacity-70" src={arrow_icon} alt="" />

        <span className="text-black">{product.name}</span>

      </div>
    </div>
  );
};

export default Breadcrum;
