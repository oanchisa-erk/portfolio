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

  return (
    <nav className="fixed top-0 w-full bg-black text-white font-extrabold font-inter z-50">
      <div className="mx-6 my-4 flex items-center justify-between">
        <div className="text-2xl font-bold">Portfolio</div>

        {/* Desktop menu */}
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

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden flex flex-col bg-black px-6 pb-4 gap-3">
          {menuItem.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleScrollTo(item.id)}
              className="py-2 border-b border-white/20"
            >
              {item.label}
            </a>
          ))}
          <DownloadResume />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
