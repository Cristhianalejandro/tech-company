import {logos} from '../assets/data'



function MarqueeSection() {
  return (
    <section className='py-12 w-full overflow-hidden bg-black text-white border-t border-b border-gray-700'>
      
      <div className="realtive w-full overflow-x-hidden">
        <div className="flex whitespace-nowrap cursor-pointer animate-marquee-slow">
          {
            [...logos,...logos].map((logo,index) => (

                <span key={index} className='text-4xl sm:text-5xl font-extrabold mx-8 tracking-widest bebas-font opacity-80 hover:opacity-100 transion duration-300' >

                  {logo}

                </span>

            ))
          }
        </div>
      </div>

          <style jsx global>
            {
              `
              @keyframes marquee-slow {
              0% {
              transform: translateX(0);
              }
              100% {
              transform: translateX(-104.9%);
              }
              }

              .animate-marquee-slow {
              animation: marquee-slow 20s linear infinite;
              }
              `
            }
          </style>

    </section>
  )
}

export default MarqueeSection
