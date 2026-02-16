import React, { useContext } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "@/Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <nav className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 text-white shadow-lg">
      <div className="max-w-[1200px] mx-auto 
                      flex flex-col sm:flex-row 
                      items-center justify-between
                      px-4 sm:px-6 lg:px-8
                      py-4 sm:py-5 lg:py-6
                      gap-4 sm:gap-0">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-10 sm:w-12 md:w-14 lg:w-16"
          />
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
            StyleVibe
          </p>
        </div>

        {/* Menu */}
        <ul className="flex flex-col sm:flex-row 
                       items-center 
                       gap-4 sm:gap-6 lg:gap-10
                       text-base sm:text-lg lg:text-xl 
                       font-medium">
          {[
            { name: "shop", path: "/" },
            { name: "mens", path: "/mens" },
            { name: "womens", path: "/womens" },
            { name: "kids", path: "/kids" },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md transition duration-300 ${
                    isActive
                      ? "bg-white text-rose-500 font-semibold"
                      : "hover:bg-white/20"
                  }`
                }
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side: login + cart */}
        <div className="flex items-center gap-4 sm:gap-5 relative">
          <Link
            to="/login"
            className="bg-white text-rose-500 
                       px-4 sm:px-5 lg:px-6 
                       py-2 sm:py-2.5 
                       rounded-md 
                       font-semibold 
                       text-sm sm:text-base
                       hover:bg-gray-100 transition"
          >
            Login
          </Link>

          <div className="relative">
            <Link to="/cart">
              <img
                src={cart_icon}
                alt="cart"
                className="w-6 sm:w-7 lg:w-8"
              />
            </Link>

            <div className="absolute -top-2 -right-2 
                            w-5 h-5 
                            flex items-center justify-center 
                            rounded-full 
                            text-xs 
                            bg-white text-rose-500 font-bold">
              {getTotalCartItems()}
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
