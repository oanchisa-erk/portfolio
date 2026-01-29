import React, { useState } from "react";
import DownloadResume from "./Resume_Download";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const menuItem = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact me" },
  ];

  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    setOpen(false);
  };

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive("home");
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black text-white font-extrabold font-inter z-50">
      <div className="mx-4 sm:mx-6 my-3 sm:my-4 flex items-center justify-between">
        <div 
          className="text-lg sm:text-xl md:text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleScrollToTop}
        >
          Oanchisa
        </div>

        <div className="hidden md:flex items-center gap-4">
          {menuItem.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleScrollTo(item.id)}
              className={`px-4 py-1 rounded-full border transition 
                text-xs 
        sm:text-sm 
        md:text-base 
        lg:text-lg 
        xl:text-xl 
        2xl:text-2xl
        ${
          active === item.id
            ? "bg-white text-black border-white"
            : "border-transparent hover:border-white"
        }`}
            >
              {item.label}
            </a>
          ))}
          <DownloadResume />
        </div>

        <button 
          className="md:hidden p-2 -mr-2" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${open ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col bg-black px-4 sm:px-6 pb-4 gap-2 sm:gap-3 border-t border-white/10">
          {menuItem.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleScrollTo(item.id)}
              className={`py-3 sm:py-2 border-b border-white/20 text-sm sm:text-base transition
                ${active === item.id ? 'text-yellow-1000' : ''}
              `}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <DownloadResume />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
