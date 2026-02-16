import React from 'react';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 mt-20 sm:mt-24 lg:mt-32">
      
      <div className="max-w-[1200px] mx-auto 
                      flex flex-col items-center 
                      gap-10 sm:gap-12 lg:gap-14
                      px-4 sm:px-6 lg:px-8
                      py-12 sm:py-16 lg:py-20">

        {/* Logo */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          {/* Logo image stays original */}
          <img 
            src={footer_logo} 
            alt="footer logo" 
            className="w-20 sm:w-24 lg:w-28" 
          />

          
          <p className=" text-white  text-3xl sm:text-4xl lg:text-5xl font-bold">
            StyleVibe
          </p>
        </div>

        {/* Menu */}
        <ul className="flex flex-wrap justify-center 
                       gap-6 sm:gap-10 lg:gap-14
                       text-white 
                       text-[16px] sm:text-[18px] lg:text-[20px] font-medium">
          {["Company", "Products", "Offices", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-gray-200 transition duration-300"
            >
              {item}
            </li>
          ))}
        </ul>

        
        <div className="flex gap-4 sm:gap-6">
          {[instagram_icon, pintester_icon, whatsapp_icon].map((icon, index) => (
            <div
              key={index}
              className="p-3 bg-white/20 backdrop-blur-sm
                         rounded-md cursor-pointer 
                         hover:bg-white/30 transition duration-300">
              <img
                src={icon}
                alt="social"
                className="w-5 sm:w-6 lg:w-7"
              />
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="w-full max-w-[700px] 
                        flex flex-col items-center 
                        gap-4 pt-6">
          <hr className="w-full h-[1px] bg-white/40 border-none" />
          <p className="text-center text-white 
                        text-[14px] sm:text-[16px] lg:text-[18px] opacity-90">
          © 2026 Style Vibe. All rights reserved. Thanks for shopping with us!
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
