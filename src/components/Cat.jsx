import React from 'react';

const Cat = () => {
  return (
    <section className='w-full h-screen p-36' style={{ background: '#151218' }}>
      <div className='mt-5 rounded-3xl flex flex-col p-40 gap-12' style={{ backgroundImage: 'linear-gradient(to bottom right, #a855f7, #fca5a5)', animation: 'changeGradient 20s infinite alternate' }}>
        <div className='flex flex-col items-center justify-center text-white gap-24'>
          <span className='text-7xl font-semibold text-center'>You can grow faster than you think</span>
          <div className='w-3/4 text-center'>
            <span className='text-xl'>Plan with cleverbooks to fulfill your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.</span>
          </div>
        </div>
        <div className='flex justify-center items-center'>
        <button 
  className='bg-stone-950 text-white p-5 rounded-full text-xl transition-transform duration-300 transform hover:scale-105' 
  style={{ display: 'inline-block' }}
>
  Get started with CleverBooks
</button>

        </div>
      </div>
    </section>
  );
};

export default Cat;
