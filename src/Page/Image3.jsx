import React from 'react'
import img3 from '../Assets/img3.png';

const Image3 = () => {
  return (
   <section className="relative w-full h-screen bg-black">
   <img
     src={img3}
     alt="AI Website Agency"
     className="absolute top-5 left-0 w-full h-full object-cover"
   />
 </section>
  )
}

export default Image3
