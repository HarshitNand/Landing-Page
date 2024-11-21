import React from "react";
import { MdFactCheck } from "react-icons/md";

const MainFeatures = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#8B4513] text-white py-8">
      {/* Heading Section */}
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        Main Features
      </h2>
      <p className="text-center text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
        All Screens and the Components designed in high-quality details in Figma.
      </p>

      {/* First Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:p-8">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="w-full max-w-xs px-6 py-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto"
            >
              <div className="flex justify-center -mt-12">
                <div className="flex items-center justify-center w-16 h-16 border-2 border-brown-500 rounded-full dark:border-blue-400 bg-[#5D4037] dark:bg-gray-700">
                  <MdFactCheck className="text-[#fffff] text-3xl" />
                </div>
              </div>
              <h2 className=" text-center mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                Design Tools
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-200 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
          ))}
      </section>

      {/* Space Between Sections */}
      <div className="my-2"></div>

      {/* Second Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:p-8">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="w-full max-w-xs px-6 py-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto"
            >
              <div className="flex justify-center -mt-12">
                <div className="flex items-center justify-center w-16 h-16 border-2 border-brown-500 rounded-full dark:border-blue-400 bg-[#5D4037] dark:bg-gray-700">
                  <MdFactCheck className="text-[#fffff] text-3xl" />
                </div>
              </div>
              <h2 className=" text-center mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                Design Tools
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-200 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
          ))}
      </section>
      
    </div>
  );
};

export default MainFeatures;
