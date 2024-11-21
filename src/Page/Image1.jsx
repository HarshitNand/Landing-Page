import React from 'react';
import img1 from '../Assets/img1.png';

const Image1 = () => {
  return (
    <section className="relative w-full h-screen bg-black">
      <img
        src={img1}
        alt="AI Website Agency"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </section>
  );
};

export default Image1;
