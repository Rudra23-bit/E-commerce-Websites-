import React, { useContext } from "react";
import { ShopContext } from "@/Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  console.log(getTotalCartAmount());

  return (
    <div className="my-24 sm:my-16 md:my-20 lg:my-24 mx-4 sm:mx-6 md:mx-10 lg:mx-[170px]  hover:bg-[#e2e2e2] hover:border-0"> 
    
  {/* Header Row */}
  <div className="hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] gap-4 sm:gap-6 md:gap-10 lg:gap-[75px] py-4 text-[#454545] align-center text-sm sm:text-base md:text-lg lg:text-[18px] font-semibold">
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
  </div>

  {/* Cart Items */}
  {all_product.map((e) => {
    if (cartItems[e.id] > 0) {
      return (
        <div key={e.id} className="border-b border-gray-300 py-4 sm:py-6">
          <p className="text-sm font-semibold">{e.name}</p>
            {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-4 sm:gap-6 md:gap-10 lg:gap-[75px]">
            <img src={e.image} alt="" className="h-12 sm:h-14 md:h-16 lg:h-[62px]" />
            <p>{e.name}</p>
            <p>$ {e.new_price}</p>
            <button className="w-14 sm:w-16 md:w-20 lg:w-[64px] h-12 sm:h-14 md:h-16 lg:h-[50px] border-2 border-[#ebebeb] bg-white">
              {cartItems[e.id]}
            </button>
            <p>$ {Number(e.new_price) * cartItems[e.id]}</p>
            <img
              className="w-3 sm:w-4 md:w-5 lg:w-[15px] mx-4 sm:mx-6 md:mx-8 lg:mx-[40px] cursor-pointer"
              src={remove_icon}
              alt="remove"
              onClick={() => removeFromCart(e.id)}
            />
          </div>
        </div>
      );
    }
    return null;
  })}

  {/* Cart Summary */}
  <div className="flex flex-col lg:flex-row my-12 sm:my-8 md:my-10 lg:my-12 gap-6 sm:gap-8">
    {/* Total Section */}
    <div className="flex-1 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-10">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Cart Total</h1>
      <div>
        <div className="flex justify-between py-2 sm:py-3 md:py-4">
          <p>SubTotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="flex justify-between py-2 sm:py-3 md:py-4">
          <p>Shipping Fee</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="flex justify-between py-2 sm:py-3 md:py-4">
          <h3>Total</h3>
          <h3>${getTotalCartAmount()}</h3>
        </div>
      </div>
      <button className="w-full sm:w-44 md:w-52 lg:w-[162px] h-12 sm:h-14 md:h-16 lg:h-[58px] bg-red-500 hover:bg-red-600 active:scale-95 text-white text-base sm:text-lg md:text-lg lg:text-base font-semibold rounded-md transition duration-200 ease-in-out cursor-pointer">
        PROCEED TO CHECKOUT
      </button>
    </div>

    {/* Promo Code Section */}
    <div className="flex-1 text-base font-medium mt-6 lg:mt-0">
      <p className="text-gray-600 text-sm sm:text-base md:text-base lg:text-base">
        If you have a promo code, Enter it here
      </p>
      <div className="w-full sm:w-[400px] md:w-[450px] lg:w-[504px] mt-4 pl-2 sm:pl-4 md:pl-5 h-12 sm:h-14 md:h-16 lg:h-[58px] bg-gray-200 flex">
        <input
          className="border-none bg-transparent text-sm sm:text-base md:text-base lg:text-base w-2/3 sm:w-[250px] md:w-[300px] lg:w-[330px] h-full focus:outline-none focus:ring-2 focus:ring-black px-2"
          type="text"
          placeholder="promo code"
        />
        <button className="w-1/3 sm:w-[140px] md:w-[150px] lg:w-[170px] h-full text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] bg-black text-white cursor-pointer rounded-md hover:bg-gray-800 transition duration-300">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default CartItems;
