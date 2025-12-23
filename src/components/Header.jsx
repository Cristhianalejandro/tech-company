import React from 'react'
import { colors } from '../assets/data'
import { CommandIcon } from 'lucide-react'

function Header() {
  return (
    <div className={`sticky top-0 z-9 w-full ${colors.BG_COLOR} py-4 border-b ${colors.BORDER_COLOR}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16 bg-white p-2 rounded-xl shadow-md border ${colors.BORDER_COLOR}`}>
            
            <div className="flex items-center space-x-2 text-xl font-bold tracking-widest uppercase">
                <span className="p-2 border border-black centered gap-1 rounded-lg">
                    <CommandIcon />
                    span
                </span>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Header
