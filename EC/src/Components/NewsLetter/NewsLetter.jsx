import React from 'react';

const NewsLetter = () => {
  return (
    <div className="newsletter w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] 
                    h-[50vh] sm:h-[45vh] md:h-[42vh] lg:h-[40vh] 
                    flex flex-col items-center justify-center 
                    mx-auto px-4 sm:px-6 md:px-12 lg:px-20 
                    mb-24 sm:mb-28 md:mb-36 lg:mb-40 
                    bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] 
                    gap-8 sm:gap-12 md:gap-16 lg:gap-20">

      {/* Heading */}
      <h1 className="text-center text-[#454545] 
                     text-[28px] sm:text-[36px] md:text-[45px] lg:text-[55px] 
                     font-semibold">
        Get Exclusive Offers On Your Email
      </h1>

      
      <p className="text-center text-[#454545] 
                    text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
        Subscribe to our newsletter and stay updated!
      </p>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between 
                      bg-white w-full sm:w-[600px] md:w-[650px] lg:w-[730px] 
                      h-[60px] sm:h-[65px] md:h-[68px] lg:h-[70px] 
                      rounded-[50px] sm:rounded-[65px] lg:rounded-[80px] 
                      border border-[#e3e3e3] gap-2 sm:gap-4 p-3 sm:p-0">

        <input
          className="flex-1 border-0 outline-none text-[#616161] 
                     text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] 
                     px-4 sm:px-6"
          type="email"
          placeholder="Your Email Id"
        />

        <button
          className="w-full sm:w-[210px] h-[50px] sm:h-[65px] md:h-[68px] lg:h-[70px] 
                     rounded-[50px] sm:rounded-[65px] lg:rounded-[80px] 
                     bg-black text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] 
                     cursor-pointer mt-2 sm:mt-0"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
