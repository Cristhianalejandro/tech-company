import React from 'react'
import { colors } from '../assets/data'

function HeroSection() {
  return (
    <section className={`${colors.BORDER_STYLE} pt-10 sm:pt-10 pb-0 overflow-hidden relative w-full`}>
        <div className="relative text-center w-full">
            <div className="mb-4 text-sm lg:text-base lg:text-left tracking-widest uppercase text-gray-500 code-font">
                ENGENEERING TOMORROW'S DIGITAL <br className="hidden lg:block"/> ECOSYSTEMS TODAY
            </div>

            <h1 className={`text-5xl md:text-8xl lg:text-[10rem] xl:text-[15rem] bebas-fonts leading-none tracking-tighter opacity-90 relative z-10 text-nowrap w-full`}> BUILD FUTURE </h1>

            <div className="relative -mt-8 sm:-mt-24 mx-auto w-full max-w-5xl h-64 md:h-[450px] rounded-xl flex items-center justify-center z-50"></div>
        </div>
    </section>
  )
}

export default HeroSection