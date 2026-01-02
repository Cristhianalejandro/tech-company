import React, { useCallback, useState } from 'react'
import { colors } from '../assets/data'
import { CommandIcon, X, Menu } from 'lucide-react'
import MobileMenu from './MobileMenu';
import './Header.css'

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  },[])

  return (
    <header className={` sticky top-0 z-99999 w-full ${colors.BG_COLOR} py-4 border-b ${colors.BORDER_COLOR}`}>

      <div className="max-w-[95%] md:max-w[90%] mx-auto px-4 sm:px-6 lg:px-8">

        <div className={`flex items-center justify-between h-16 bg-white p-2 rounded-xl shadow-md border ${colors.BORDER_COLOR}`}>
            
            <div className="flex items-center space-x-2 text-xl font-bold tracking-widest uppercase w-10 h-12">

                <span className="problem p-2 border border-black centered gap-1 rounded-lg w-full h-full">

                <CommandIcon />
                
                </span>
            </div>

            <nav className="hidden md:flex space-x-6 text-sm font-medium">
              {["LAB","SERVICES","TECH","PORFOLIO","ABOUT"].map((item) => (
                <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${colors.ACCENT_COLOR} hover:opacity transition hover:underline underline-offset-2 hover:-translate-y-1`}
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex space-x-3">
              <button className={`px-4 py-2 text-sm font-medium ${colors.TEXT_COLOR} rounded-lg border ${colors.BORDER_COLOR} hover:bg-gray-100 transition`}>
              REQUEST A DEMO
              </button>

              <button className={`px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-cyan-600 cursor-pointer transition-all duration-200 ease-in`}>
                BUILD WITH US
              </button>
            </div>

            <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-black">
              {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>

        </div>
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

    </header>
  )
}

export default Header
