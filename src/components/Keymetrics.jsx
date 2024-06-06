import React, { useState } from 'react';

import CountUp from 'react-countup';

const Keymetrics = () => {
    const [change, setChange] = useState(85);
    const [line, setLine] = useState('Reduction in out-of-stock');
    const [endpoint, setEndpoint] = useState('%');

    const setNum1 = () => {
        setChange(85);
        setLine('Increase in productivity');
        setEndpoint('%');
      };
      
      const setNum2 = () => {
        setChange(25);
        setLine('Reduction in error rate');
        setEndpoint('%');
      };
      
      const setNum3 = () => {
        setChange(15);
        setLine('Improvement in customer satisfaction');
        setEndpoint('%');
      };
      

    return (
        <div className='relative w-full h-screen'>

            {/* Blurred effect in the bottom-right corner */}
            <div className="absolute bottom-0 right-0 h-80 w-60 bg-red-300 z-10 rounded-full" style={{ filter: 'blur(212px)' }}></div>

            {/* Scroll and text */}
            <div className='absolute top-0 left-0 z-10'>
                <div className='p-40 flex gap-10 overflow-auto'>
                    {/* Scroll */}
                    <div className='flex items-center justify-center' >
                       
                        <div className='h-full' style={{ borderRight: '2px solid white', paddingRight: '10px' }}></div>
                    </div>
                    {/* Text */}
                    <div className='text-white flex flex-col gap-4'>
                    <button onClick={setNum1} className='rounded-full border-4 border-purple-300 p-4 inline-flex justify-center'>
  <span className='text-xl font-semibold'>Increase in Productivity</span>
</button>
<button onClick={setNum2} className='rounded-full border-4 border-purple-300 p-4 inline-flex justify-center'>
  <span className='text-xl'>Reduction in Error Rate</span>
</button>
<button onClick={setNum3} className='rounded-full border-4 border-purple-300 p-4 inline-flex justify-center'>
  <span className='text-xl'>Improvement in Customer Satisfaction</span>
</button>

                    </div>
                </div>
            </div>

            {/* Content with background color */}
            <div className='w-full h-full relative flex items-center justify-center' style={{ background: '#151218' }}>
                {/* Scroller and content */}
                <div className='text-white flex flex-col gap-4'>
                    <div className='flex justify-center items-end'>
                        <span className='font-extrabold text-9xl' style={{
                            backgroundImage: 'linear-gradient(to bottom right, #fca5a5 30%,#8b5cf6,#fca5a5)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            <CountUp start={0} end={change} duration={1} />
                        </span>
                        <span className='font-semibold text-3xl'>{endpoint}</span>
                    </div>
                    <span className='text-4xl'>{line}</span>
                </div>
            </div>

        </div>
    );
}

export default Keymetrics;
