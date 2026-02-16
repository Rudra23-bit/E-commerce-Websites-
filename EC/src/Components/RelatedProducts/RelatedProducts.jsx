import React from "react";
import data_product from "@/Components/Assets/data";
import Item from "@/Components/Item/Item";

const RelatedProducts = () => {
  return (
    <div className="w-full bg-white">

      <div className="max-w-[1200px] mx-auto
                      px-4 sm:px-6 lg:px-8
                      py-12 sm:py-16 lg:py-20">

        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-[#171717]
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                         font-semibold">
            Related Products
          </h2>

          <div className="w-16 sm:w-20 h-[3px] bg-[#252525] mx-auto rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="mt-10 sm:mt-12 lg:mt-14
                        grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
                        gap-6 sm:gap-8">
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
    </div>
  );
};

export default RelatedProducts;
