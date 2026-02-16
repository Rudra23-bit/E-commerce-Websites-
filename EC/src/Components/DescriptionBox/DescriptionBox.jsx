import React from "react";

const DescriptionBox = () => {
  return (
    <div className="w-full bg-white">

      <div className="max-w-[1200px] mx-auto
                      px-4 sm:px-6 lg:px-8
                      py-12 sm:py-16 lg:py-20">

        {/* Tabs */}
        <div className="flex flex-wrap border-b border-[#d0d0d0]">

          <div className="px-6 sm:px-8
                          py-3 sm:py-4
                          text-sm sm:text-base
                          font-semibold
                          border border-b-0 border-[#d0d0d0]
                          bg-white">
            Description
          </div>

          <div className="px-6 sm:px-8
                          py-3 sm:py-4
                          text-sm sm:text-base
                          text-gray-600
                          bg-gray-50
                          border border-b-0 border-[#d0d0d0]">
            Reviews (122)
          </div>

        </div>

        {/* Content */}
        <div className="border border-[#d0d0d0]
                        p-6 sm:p-10 lg:p-12
                        space-y-6
                        text-gray-600
                        text-sm sm:text-base
                        leading-relaxed">

          <p>
            Made from ultra-soft, high-quality cotton blend, this sweatshirt
            ensures that your child stays warm and comfortable throughout the day.
            The fabric is gentle on the skin, making it ideal for playtime,
            school, or cozy evenings.
          </p>

          <p>
            Designed with durability and style in mind, it offers a perfect
            balance of comfort and functionality. A must-have addition to
            any modern wardrobe.
          </p>

        </div>

      </div>
    </div>
  );
};

export default DescriptionBox;
