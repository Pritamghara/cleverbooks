import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Image */}
      <img className="w-full h-full object-cover" src="1.png" alt="hero image" />

      {/* Background div */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-full bg-black bg-opacity-50 flex justify-start items-center">
        {/* Text container */}
        <div className="ml-20 text-white flex flex-col  gap-14">
          {/* Span container */}
          <div className="flex flex-col text-7xl font-extrabold">
            {/* First span */}
            <span>Unleash Your Imagination</span>
            <span>Discover Your</span>
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-red-300 via-purple-800 to-red-300">Next Great Read.</span>
          </div>
            {/* text */}
            <div className='font-semibold text-xl flex flex-col gap-3'>
    <span>Embark on literary adventures with Cleverbooks</span>
    <span>Discover curated collections tailored for avid readers and book enthusiasts.</span>
    <span>Experience the magic of storytelling with our handpicked selection of captivating reads.</span>
</div>




          {/* Button */}
         <div>
  <button class="relative rounded-full overflow-hidden p-6 border-4 border-purple-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-red-300 hover:to-purple-800 text-transparent hover:text-white ">
    <span class="text-lg font-semibold bg-gradient-to-br from-red-300 to-purple-800 bg-clip-text  ">
      Get started with CleverBooks
    </span>
  </button>
</div>






        </div>
      </div>
    </div>
  );
};

export default Hero;
