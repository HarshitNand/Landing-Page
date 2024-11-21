import React from 'react';
import heros from '../Assets/heros.png';
import { FaCheckCircle } from 'react-icons/fa';
import {motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col lg:flex-row items-center  bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] p-4 lg:p-10">
      {/* Left Side - Text */}
      <div className="lg:w-1/2 text-white flex flex-col justify-center space-y-6 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold  bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)]  text-transparent bg-clip-text [-webkit-background-clip:text] ">
          Pixel Bloom: Crafting Next-Gen AI Models
        </h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Pixel Bloom is transforming industries with advanced AI models that drive innovation and efficiency. Their solutions empower businesses to harness <br/> AI for groundbreaking outcomes.
        </p>
        <div className="flex flex-col space-y-4">
         
          {[
            'Reusable Components',
            'Fully Components & Variants',
            'Implementation Figma Variable',
            'Responsive View & Style Guide',
            'Dark Mode and Light Mode',
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-white-500 text-xl">
                <FaCheckCircle />
              </span>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image */}
      <motion.div
      style={{
        opacity:.8,
        rotateX:8,
        transformPerspective:"800px",
      }}
      className="lg:w-1/2 flex justify-center mt-6 lg:mt-0 mb-8 mr-2">
        <img
          src={heros}
          alt="AI Website Agency"
          className="max-w-full h-auto rounded-lg shadow-lg object-contain"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
