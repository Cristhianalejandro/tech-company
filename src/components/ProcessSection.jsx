import React from 'react'
import {colors,steps} from '../assets/data'
 
function ProcessSection() {
  return (
    <section id='services' className={`${colors.BORDER_STYLE} pt-12 sm:pt-16`}>
      
    <div className="flex flex-col md:flex-row border border-gray-300 rounded-xl overflow-hidden bg-white min-h-[600px]">
        <div className="md:w-1/4 p-6 sm:p-10 relative bg-gray-100 border-r border-gray-300 flex flex-col justify-between">
             <div className="hidden md:block absolute inset-y-0 left-0 w-8 lg:w-12 pt-16 -ml-4 transform -rotate-90 origin-top-left">

                  <span className='text-7xl font-extrabold tracking-widest '>SYSTEM</span>

             </div>


             <div className="relative z-10">
                <p className="text-sm code-font tracking-widest uppercase mb-3 text-gray-600">OUR BLUEPRINT</p>
             </div>
        </div>
    </div>

    </section>
  )
}

export default ProcessSection
