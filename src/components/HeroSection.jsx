import React from 'react'
import { colors } from '../assets/data'

function HeroSection() {
  return (
    <section className={`${colors.BORDER_STYLE} pt-10 sm:pt-10 pb-0 overflow-hidden relative w-full`}>
        <div className="relative text-center w-full">
            <div className="mb-4 text-sm lg:text-base lg:text-left tracking-widest uppercase text-gray-500 code-font">
                ENGENEERING TOMORROW'S DIGITAL <br className="hidden lg:block"/> ECOSYSTEMS TODAY
            </div>

            <h1 className={`text-5xl md:text-8xl lg:text-[10rem] xl:text-[12rem] bebas-fonts leading-none tracking-tighter opacity-90 relative z-10 text-nowrap w-full font-extrabold`}> BUILD FUTURE </h1>

            <div className="hidden lg:block bg-zinc-900 animate-border text-zinc-100 code-font cursor-pointer border-2 border-cyan-200 rounded-full p-4 px-8 absolute left-12 top-110.shadow-2xl z-90 hover:bg-cyan-500 transition-all duration-200 ease-in hover:-translate-y-1">
          REGISTER NOW
        </div>

            <div className="relative -mt-8 sm:-mt-24 mx-auto w-full max-w-5xl h-64 md:h-[450px] rounded-xl flex items-center justify-center z-50">

                <img src="../../public/h2.png" alt="hero_image" className='z-50 hidden pointer-events-none lg:block absolute left-1/4 w-190 -bottom-23' />

                <img src="../../public/hero_bot.png" alt=" hero_image" className='z-50 lg:hidden pointer-events-none absolute -bottom-20 left-1/10' />

                <span className="absolute z-10 pointer-events-none size-60 lg:size-130 bg-cyan-400/50 bottom-18 left-1/4 blur-3xl saturate-150 p-0 m-0"></span>

            </div>
        </div>

        <div className="relative z-20 mt-16 sm:mt-24 flex flex-col sm:flex-row justify-between items-start sm:items-center pt-10">
          <div className="max-w-md mb-6 sm:mb-0">
            
            <p className='font-medium code-font text-lg uppercase mb-3 '>
              WE DON'T IMAGINE FUTURES, WE BUILD THEM
            </p>

            <div className="flex flex-wrap gap-2 lg:gap-3 max-w-sm">

              {["AI-First Design","Ethical Scaling","Cognitive"].map((tag) => (
                <span key={tag} className='px-3 py-1 text-xs lg:text-sm font-medium rounded-full bg-zinc-100 border border-zinc-300'>

                  {tag}

                </span>
              ))}

            </div>

          </div>  

          <div className="bg-white lg:bg-zinc-900 p-4 rounded-xl border-2 border-gray-100 max-w-xs mb-8 lg:mb-0">

              <div className="flex items-center space-x-3">
                <img src="../../public/dan.png"  alt="Avatar" className='rounded-full w-12 bg-zinc-200' />

                <p className='text-xs code-font font-medium text-gray-700 lg:text-zinc-100'>HI, I'M GAMEFLEX, CHIEF FUTURE ARCHITECT. LET'S ENGINEER YOUR NEXT DECADE!</p>
              </div>

             </div>
        </div>

        <div className="absolute z-50 w-30 h-12 bg-zinc-100/40 text-zinc-950 backdrop-blur-sm rounded-full border-2 border-zinc-400 code-font center-item bottom-3/4 left-65 lg:left-80 animate-wiggle">
          PREDICT
        </div>

        <div className="absolute z-50 w-30 h-12 bg-zinc-100/40 text-zinc-950 backdrop-blur-sm rounded-full border-2 border-zinc-400 code-font center-item bottom-2/3 right-20  animate-wiggle hidden lg:flex">
          PEOPLE
        </div>

        <div className="absolute z-50 w-30 h-12 bg-zinc-100/40 text-zinc-950 backdrop-blur-sm rounded-full border-2 border-zinc-400 code-font center-item bottom-1/2 left-2/3 animate-wiggle hidden lg:flex">
          PROTOTYPE
        </div>
    </section>
  )
}

export default HeroSection