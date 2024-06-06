import React, { useState } from 'react';


const Problemstraget = () => {
  const sections = [
    "Accurate demand forecasting",
    "HELIX - WORKFLOW AUTOMATION",
    "AUTOMATED DISTRIBUTION PLANNING",
    "EASY INTEGRATION",
    "CUSTOM DASHBOARDS",
    "CONSENSUS PLANNING"
  ];

  const content = [
    "Accurate demand forecasting ensures that you never miss an order and always know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What's more, Crest improves with every planning cycle as the data set gets richer.",
    "HELIX Workflow Automation streamlines your business processes, reducing manual efforts and improving efficiency. By automating routine tasks, HELIX helps your team focus on higher-value activities, driving productivity and growth.",
    "Automated Distribution Planning optimizes your supply chain by automatically generating the most efficient distribution plans. This reduces lead times, minimizes costs, and ensures timely delivery of products to your customers.",
    "Easy Integration with existing systems ensures a smooth transition without disrupting your current operations. Our solution seamlessly integrates with various platforms, providing a unified and efficient workflow.",
    "Custom Dashboards provide you with a comprehensive view of your business metrics. Tailored to your specific needs, these dashboards offer real-time insights and help you make data-driven decisions with confidence.",
    "Consensus Planning brings together all stakeholders to agree on a unified business plan. This collaborative approach ensures alignment across departments, resulting in more accurate and achievable plans."
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [divs, setDivs] = useState(sections.map(() => []));

  const handleClick = (index) => {
    setActiveIndex(index);
    const newDivs = [...divs];
    
    // Clear content array for previously clicked section
    newDivs.forEach((_, i) => {
      if (i !== index) {
        newDivs[i] = [];
      }
    });
  
    // Check if content has already been rendered
    if (newDivs[index].length === 0) {
      newDivs[index].push(content[index]);
      setDivs(newDivs);
    }
  };

  return (
    <section className='p-32 flex flex-col justify-center items-center w-full gap-20'>
      <div>
        <span className='text-7xl font-extrabold'>
          Things your site wishes it could do
        </span>
      </div>
      
      <div className='mt-5 flex flex-col gap-5 px-64'>
        {sections.map((section, index) => (
          <div key={index} className='flex flex-col gap-10'>
            <div>
              <span 
                className={`text-5xl cursor-pointer ${activeIndex === index ? 'active' : ''}`} 
                onClick={() => handleClick(index)}
              >
                {section}
              </span>
            </div>
            {divs[index].map((content, contentIndex) => (
              <div key={contentIndex} className='mt-5 text-gray-700 text-2xl' style={{ transition: 'opacity 1s ease-in' }}>
                {content}
              </div>
            ))}
            <div className='border-b-2 border-gray-400 pb-1'></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Problemstraget;
