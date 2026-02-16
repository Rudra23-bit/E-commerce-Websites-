import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div
      className="
        item-card 
        bg-white 
        rounded-lg 
        shadow-md 
        flex flex-col items-center 
        w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] 
        p-4 sm:p-5 md:p-6 lg:p-7
        transition-transform duration-300 
        hover:scale-105
      "
    >
      {/* Image */}
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] object-cover rounded-md mb-3"
        />
      </Link>

      {/* Name */}
      <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl text-center mb-2 font-medium">
        {name}
      </p>

      {/* Prices */}
      <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        <span className="text-red-500 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
          ${new_price}
        </span>
        <span className="text-gray-400 line-through text-xs sm:text-sm md:text-base lg:text-lg font-medium">
          ${old_price}
        </span>
      </div>
    </div>
  );
};

export default Item;
