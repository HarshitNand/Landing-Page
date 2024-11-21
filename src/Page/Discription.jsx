import React from 'react';
import p1 from '../Assets/p1.jpg'; 
import { FaCheckCircle } from 'react-icons/fa';

const Discription = () => {
  return (
    <section className="min-h-screen top-0 flex flex-col space-x-20 lg:flex-row items-center bg-backgroundColor p-4 lg:p-10">
      {/* Description Section */}
      <div className="lg:w-1/2 text-white flex flex-col justify-center space-y-6 text-center lg:text-left lg:pr-8"> {/* Added lg:pr-8 for spacing */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Description
        </h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Hello Friends 👋🏻
        </p>

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Achieving your goals is now simpler than ever with Beetroot. Take control of your habits by setting personalized goals, receiving timely reminders, and effortlessly tracking your progress. The app records your journey and provides insights to help you build a healthier, more organized life. It addresses several challenges, from maintaining consistency to monitoring your overall progress. Your path to a better you has never been this straightforward! 
        </p>

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          I also want to share my exploration of our app's features. You can set specific quitting goals, find tips for overcoming cravings, and access support resources whenever you need them. I hope you guys find it useful. Feel free to comment!
        </p>

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          🔥 Checkout our other product - https://ui8.net/omega-orion/products/forgo---quit-smoking-app
        </p>
      </div>

      {/* Features Section */}
      <div className="lg:w-2/1 text-white flex flex-col space-y-6 lg:pl-8"> {/* Added lg:pl-8 for spacing */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Features
        </h2>
        
        <div className="flex flex-col space-y-4">
          {[
            '120+ Screens',
            'Fully customisable designs',
            'Organized Design system',
            'Light and Dark Mode',
            'Customised Illustration',
            'Neatly Organised layer',
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FaCheckCircle />
              <p className="text-sm sm:text-base lg:text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discription;
