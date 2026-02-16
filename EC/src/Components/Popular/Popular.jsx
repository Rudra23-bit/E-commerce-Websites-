import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div
      className="
        popular 
        flex flex-col items-center 
        gap-8 
        w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] 
        mx-auto 
        py-12 sm:py-16 md:py-20 lg:py-24
      "
    >
      {/* Heading */}
      <h1
        className="
          text-[#171717] 
          text-3xl sm:text-4xl md:text-5xl lg:text-[50px] 
          font-semibold 
          text-center
          mb-10 sm:mb-12 md:mb-16 lg:mb-20
        "
      >
        POPULAR IN WOMEN
      </h1>

      {/* Products Grid */}
      <div
        className="
          popular-item 
          flex flex-wrap justify-center 
          gap-6 sm:gap-8 md:gap-10 lg:gap-12
        "
      >
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
