function MobileMenu({ isMenuOpen, toggleMenu }) {
  return (
    <div
      className={`fixed inset-0 z-40  bg-black/80 backdrop-blur-sm bg-opacity-95 trasnform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-300 ease-in-out md:hidden`}
    >

        <button className="text-white absolute right-7 top-7 hover:bg-gray-600 p-4 rounded-md " onClick={toggleMenu}> X </button>

      <div className="p-6 pt-24 space-y-6 text-2xl font-bold text-white">
        {["LAB", "SERVICES", "TECH", "PORTFOLIO", "ABOUT"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={toggleMenu}
            className=" block hover:text-cyan-500 transition border-b border-b-gray-700/90 pb-3"
          >
            {item}
          </a>
        ))}

        <button
          onClick={toggleMenu}
          className="w-full mt-4 px-6 py-3 text-lg font-medium bg-cyan-500 text-white code-font hover:bg-cyan-600 transition"
        >
          BUILD WITH US
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
