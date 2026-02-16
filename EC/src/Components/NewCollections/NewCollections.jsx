import React from "react"; 
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div
      className="
        new-collections 
        flex flex-col items-center 
        w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] 
        mx-auto 
        py-12 sm:py-16 md:py-20 lg:py-24 
        gap-6 sm:gap-8 
        mb-24 sm:mb-28 md:mb-32 lg:mb-36
      "
    >
      {/* Section Heading */}
      <h1
        className="
          text-[#171717] 
          text-3xl sm:text-4xl md:text-5xl lg:text-[50px] 
          font-semibold 
          text-center
        "
      >
        NEW COLLECTIONS
      </h1>

      <hr className="w-full border-gray-300 my-4 sm:my-6 md:my-8 lg:my-10" />

      
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
          gap-4 sm:gap-6 md:gap-8 lg:gap-10
          w-full
        "
      >
        {new_collection.map((item, i) => (
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

export default NewCollections;
