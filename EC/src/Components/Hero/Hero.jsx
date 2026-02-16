import React from "react"; 
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]">
      <div className="flex flex-col flex-1 gap-2 sm:gap-4 md:gap-5 pl-4 sm:pl-8 md:pl-[180px] leading-[1.1] mt-4 md:mt-0">
        <h2 className="text-[#090909] text-[20px] sm:text-[24px] md:text-[26px] font-semibold">NEW ARRIVALS ONLY</h2>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
          <p className="text-[#171717] text-[60px] sm:text-[80px] md:text-[100px] font-bold">new</p>
          <img className="w-[60px] sm:w-[85px] md:w-[105px]" src={hand_icon} alt="" />
        </div>
        <p className="text-[#171717] text-[60px] sm:text-[80px] md:text-[100px] font-bold">Collections</p>
        <p className="text-[#171717] text-[60px] sm:text-[80px] md:text-[100px] font-bold">for everyone</p>
        <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 w-[220px] sm:w-[280px] md:w-[310px] h-[50px] sm:h-[60px] md:h-[70px] rounded-[50px] sm:rounded-[65px] md:rounded-[75px] mt-4 sm:mt-6 md:mt-7 bg-[#ff4141] text-white text-[16px] sm:text-[20px] md:text-[22px] font-medium">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-4 md:mt-0">
        <img className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]" src={hero_image} alt="hero_image" />
      </div>
    </div>
  );
};

export default Hero;
