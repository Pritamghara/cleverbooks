import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";

import testimonials from '../Utils/utils';

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentTestimonial = testimonials[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className='p-32 flex gap-12'>
            {/* main */}
            <div style={{ flex: 3 }} className='p-8 px-10 flex flex-col gap-8'>
                {/* content */}
                <div>
                    <span className='text-2xl leading-relaxed' style={{ transition: 'opacity 0.5s ease-in' }}>
                        {currentTestimonial.desc}
                    </span>
                </div>

                {/* reviewer */}
                <div className='flex justify-between'>
                    {/* arrows and review div */}
                    <div className='flex flex-col gap-8'>
                        {/* review and image */}
                        <div className='flex gap-6'>
                            <div className='h-20 w-20 rounded-full border-2 border-purple-500 p-2 '>
                                <img className='' src={"4.png"} alt="" />
                            </div>
                            <div className='flex flex-col justify-end gap-1'>
                                <span className='text-4xl font-semibold'>{currentTestimonial.name}</span>
                                <span className='text-2xl'>{currentTestimonial.designation}</span>
                            </div>
                        </div>
                        <div className='flex gap-8 items-start'>
                            <div className='border-4 rounded-full border-red-300' onClick={handlePrevious}>
                                <IoChevronBackOutline className='h-10 w-10' />
                            </div>
                            <div className='border-4 rounded-full border-red-300' onClick={handleNext}>
                                <IoIosArrowForward className='h-10 w-10' />
                            </div>
                        </div>
                    </div>

                    <div className='items-center'>
                        <img src={currentTestimonial.cimg} alt="" />
                    </div>
                </div>

                {/* review */}
                <div className='flex mt-20 gap-44 justify-center items-center '>
                    <div className='flex-1 flex flex-col gap-4 bg-purple-100 rounded-3xl p-6 text-center' style={{ transition: 'all 0.2s ease-in' }}>
                        <span className={`font-semibold text-5xl ${currentTestimonial.review1.secondtext ? '' : 'text-2xl'}`} style={{
                            backgroundImage: 'linear-gradient(to right, #fca5a5, #a855f7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            {currentTestimonial.review1.firsttext}
                        </span>
                        <span className='text-xl'>{currentTestimonial.review1.secondtext}</span>
                    </div>

                    {/* second review */}
                    <div className='flex-1 flex flex-col gap-4 p-6 bg-purple-100 rounded-3xl text-center' style={{ transition: 'all 0.2s ease-in' }}>
                        <span className={`font-semibold text-5xl ${currentTestimonial.review1.secondtext ? '' : 'text-2xl'}`} style={{
                            backgroundImage: 'linear-gradient(to right, #fca5a5, #a855f7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            {currentTestimonial.review2.firsttext}
                        </span>
                        <span className='text-xl'>{currentTestimonial.review2.secondtext}</span>
                    </div>
                    <div className={`flex-1 border-4 border-purple-200 hover:border-purple-600 transition delay-400 ease-in p-14 rounded-3xl flex flex-col justify-center gap-2`} style={{ border: !currentTestimonial.readmore ? 'none' : '', transition: 'all 0.2s ease-in' }}>
                        <span className='text-center text-3xl font-semibold' style={{
                            backgroundImage: 'linear-gradient(to right, #fca5a5, #a855f7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            {currentTestimonial.readmore}
                        </span>
                    </div>
                </div>
            </div>

            {/* image */}
            <div style={{ flex: 1 }} className='h-128 w-128 rounded-3xl '>
                <img className='h-full w-full' src={currentTestimonial.reviewimg} alt="" />
            </div>
        </section>
    );
}

export default Reviews;
