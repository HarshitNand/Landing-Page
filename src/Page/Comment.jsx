import React from 'react'

const Comment = () => {
  return (
   <section className=" h-[25rem] mx-auto p-6 bg-[#141414]">
   {/* First Row */}
   <div className="flex mt-20 flex-col lg:flex-row items-center justify-between mb-6">
     {/* Heading and Comment */}
     <div className="text-center lg:text-left">
       <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-white">Comment</h2>
      

        {/* Avatar, Name, and Paragraph */}
     <div className="flex items-center space-x-4 mt-4 lg:mt-0">
     <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-16 w-16 rounded-full"
                    />
       <div>
         <h3 className="text-lg font-semibold text-white">John Doe</h3>
         <p className="text-white">
           Give feedback on 19th sept 2024.
         </p>
       </div>
     </div>
     <p className="text-white">The Template i bought looked great in the actual file was pooly designed .
      
     </p>
     </div>

    
   </div>

   {/* Second Row */}
   <div className="flex flex-col lg:flex-row items-center justify-between  ">
     <input
       type="text"
       placeholder="Drop a comment,be helpful"
       className="w-full lg:w-2/3 p-2 border rounded-lg mb-4 lg:mb-0 bg-gray-700 "
     />
     <button className="w-full lg:w-40 bg-[#CCFF00] text-black font-bold py-2 px-4 rounded">
       Submit
     </button>
   </div>
 </section>
  )
}

export default Comment
