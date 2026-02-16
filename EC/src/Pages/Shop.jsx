import React, { useContext } from "react";
import Hero from "@/Components/Hero/Hero";
import Popular from "@/Components/Popular/Popular";
import Offers from "@/Components/Offers/Offers";
import NewCollections from "@/Components/NewCollections/NewCollections";
import NewsLetter from "@/Components/NewsLetter/NewsLetter";
import { ShopContext } from "@/Context/ShopContext";

const Shop = () => {
  const { all_product, addToCart } = useContext(ShopContext);

  return (
    <div className="w-full overflow-x-hidden">

      {/* Top Sections */}
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />

      {/* Products Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Products
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {all_product.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col p-4"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover transform hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Name */}
                <h2 className="mt-4 text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>

                {/* Price */}
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-lg font-bold text-red-500">
                    ${item.new_price}
                  </span>
                  <span className="text-gray-400 line-through">
                    ${item.old_price}
                  </span>
                </div>

                {/* Button */}
                <button
                  onClick={() => addToCart(item.id)}
                  className="mt-auto bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition "
                >
                  Add to Cart
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Shop;
