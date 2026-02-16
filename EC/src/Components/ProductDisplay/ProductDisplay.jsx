import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "@/Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="w-full bg-white">

      <div className="max-w-[1200px] mx-auto 
                      px-4 sm:px-6 lg:px-8
                      py-10 sm:py-14 lg:py-16
                      flex flex-col md:flex-row 
                      gap-10 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="flex gap-4 sm:gap-6">

          {/* Thumbnail Images */}
          <div className="flex flex-row md:flex-col gap-3">
            {[1,2,3,4].map((_, i) => (
              <img
                key={i}
                className="h-[100px] sm:h-[130px] md:h-[150px] object-cover rounded-md"
                src={product.image}
                alt=""
              />
            ))}
          </div>

          {/* Main Image */}
          <div>
            <img
              className="w-[260px] sm:w-[350px] md:w-[420px] lg:w-[520px]
                         h-[320px] sm:h-[450px] md:h-[580px] lg:h-[650px]
                         object-cover rounded-lg"
              src={product.image}
              alt=""
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col space-y-6">

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            {product.name}
          </h1>

          {/* Stars */}
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <span className="text-gray-600">(122)</span>
          </div>

          {/* Prices */}
          <div className="flex items-center gap-6 text-xl sm:text-2xl font-bold">
            <span className="text-gray-400 line-through">
              ${product.old_price}
            </span>
            <span className="text-[#ff4141]">
              ${product.new_price}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Made from ultra-soft, high-quality cotton blend, this sweatshirt
            ensures comfort throughout the day. The fabric is gentle on the skin,
            making it ideal for playtime, school, or cozy evenings.
          </p>

          {/* Size Selection */}
          <div className="space-y-3">
            <h2 className="text-gray-700 text-lg font-semibold">
              Select Size
            </h2>

            <div className="flex flex-wrap gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className="px-5 py-2 border border-gray-300 
                             rounded-md cursor-pointer 
                             hover:bg-gray-100 transition"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product.id)}
            className="mt-4 w-[180px] 
                       py-3 
                       bg-[#FF4141] 
                       text-white 
                       font-semibold 
                       rounded-md 
                       hover:opacity-90 transition"
          >
            ADD TO CART
          </button>

          {/* Category + Tags */}
          <div className="pt-4 space-y-2 text-sm sm:text-base text-gray-600">
            <p>
              <span className="font-semibold text-gray-800">Category:</span> Woman, T-Shirt, Crop Top
            </p>
            <p>
              <span className="font-semibold text-gray-800">Tags:</span> Modern, Latest
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDisplay;
