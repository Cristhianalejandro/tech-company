import { Github, Linkedin, Twitter } from "lucide-react";
import { footerLinks } from "../assets/data";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white rounded-t-3xl sm:rounded-t-[3rem] mt-16 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-6">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          {/* Column 1: Call to Action / Subscription */}
          <div className="md:col-span-1">
            <h4 className="text-lg code-font font-bold mb-4">
              THE CYBREX NEWSLETTER
            </h4>
            <p className="text-sm text-gray-400 mb-3">
              Get weekly insights from our Research Lab.
            </p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="email@address.com"
                className="p-3 w-full bg-gray-800 text-white text-sm rounded-l-lg focus:ring-cyan-500 focus:border-cyan-500 border-none"
              />
              <button className="px-4 py-3 text-sm font-bold bg-cyan-500 text-white rounded-r-lg hover:bg-cyan-600 transition whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Columns 2, 3, 4: Link Groups - Responsive stacking on mobile */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-base font-bold mb-4">{col.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-cyan-500 transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="relative pt-8 flex flex-col items-center justify-center overflow-hidden">
          <div className="text-center pointer-events-none opacity-5">
            {/* Branding */}
            <span className="text-9xl sm:text-[14rem] md:text-[10rem] font-extrabold  text-white tracking-wide bebas-font leading-none">
              CCTECH  
            </span>
            <h5 className="py-5">solutions</h5>
          </div>
          <p className="text-xs text-gray-500 mt-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center">
            &copy; {new Date().getFullYear()} CCTECH solutions company. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
