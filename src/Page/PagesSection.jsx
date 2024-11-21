import React from 'react';
import p1 from '../Assets/p1.jpg'; 
import { FaCheckCircle } from 'react-icons/fa';

const PagesSection = () => {
  return (
    <section className="min-h-screen top-5 flex flex-col lg:flex-row items-center bg-backgroundColor p-4 lg:p-10">
      <div className="lg:w-1/2 text-white flex flex-col justify-center space-y-6 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Pages
        </h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
         These are the avaiable pages, offering key information and resources.Explore each one for insights tailored to your needs.
        </p>
        <div className="flex flex-col space-y-4">
          {[
            'Homepage , Navigation menu',
            'Our Services',
            'Our Solution',
            'About us page',
            'Price page',
            'Frequently asked question',
            'Testimonial page',
            'Contact us page',
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FaCheckCircle />
              <p className="text-sm sm:text-base lg:text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
        <img src={p1} alt="AI Website Agency" className="max-w-full h-auto rounded-lg shadow-lg object-contain" />
      </div>
    </section>
  );
};

export default PagesSection;
