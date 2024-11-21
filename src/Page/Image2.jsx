import React from 'react';
import img2 from '../Assets/img2.png';

const Image2 = () => {
  return (
   <section className="relative w-full h-screen bg-black">
   <img
     src={img2}
     alt="AI Website Agency"
     className="absolute top-0 left-0 w-full h-full object-cover"
   />
 </section>
  )
}

export default Image2
