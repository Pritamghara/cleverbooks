import React from 'react';
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {

    const scrollToTop = () => {
        scroll.scrollToTop({
          duration: 2000, // 4000 milliseconds = 4 seconds
          smooth: 'easeInOutQuart' // Optional: easing function
        });
      };
  return (
    <section className='relative w-full h-full p-36' style={{ background: '#151218' }}>
      <div className='flex text-white'>
        <div className='flex-1 flex flex-col gap-7'>
          <span className='text-5xl font-extrabold'>CleverBooks</span>
          <span className='text-xl'>Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</span>
        </div>
        <div className='flex-1 flex flex-col items-center text-gray-700 text-2xl gap-4'>
          <span className='text-white'>Explore</span>
          <span>Product</span>
          <span>Pricing</span>
          <span>Customer Stories</span>
        </div>
        <div className='flex-1 flex flex-col items-center text-gray-700 text-2xl gap-4'>
          <span className='text-white'>Learn</span>
          <span>About us</span>
          <span>Blog</span>
        </div>
        <div className='flex-1 flex flex-col items-center text-2xl gap-4'>
          <span className='text-white'>Contact Cleverbooks</span>
          <span>1234 Elm Street</span>
          <span>Springfield, USA</span>
        </div>
      </div>
      <div className='absolute bottom-10 right-40 rounded-full border border-1 border-white p-2'>
        <FaArrowUp className='text-white h-10 w-10' onClick={scrollToTop}/>
      </div>
    </section>
  );
};

export default Footer;
