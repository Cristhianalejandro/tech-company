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
                <h2 className={`text-4xl bebas-font font-bold ${colors.ACCENT_COLOR}`}>THE ARCHITECTURE LOOP</h2>
             </div>

             <div className="w-full h-40 mt-6 md:mt-0 bg-gray-300 rounded-lg flex items-center justify-center border-2 border-dashed bord-gray-500 opacity-80 ">

                <video src="../../public/tech.mp4" autoPlay loop muted playsInline className='size-full object-cover  saturate-150' />

             </div>
        </div>

        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 p-6">
          {
            steps.map((step) => {
              <div key={step.id} className="relative p-6 min-h-[300px] group">
                <div className="mb-4 flex items-center">
                  <span className={`text-lg font-extrabold ${colors.PRIMARY_BLUE} `}>
                    {step.id}
                  </span>

                  <div className="ml-4 w-10 bg-cyan-500"></div>
                </div>
                <h3 className='text-xl lg:text-3xl font-bold bebas font mg-3 '>
                  {step.title}
                </h3>

                <p className='text-gry-600 text-sm'>
                  {step.desc}
                </p>
              </div>
            })
          }
        </div>
    </div>

    </section>
  )
}

export default ProcessSection
