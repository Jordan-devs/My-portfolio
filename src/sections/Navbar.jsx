import { pre } from "motion/react-client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => {
    return <ul className="nav-ul">{}</ul>;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Olamide
          </a>

          <button
            className="text-neutral-400 hover:text-white focus:outline-none  flex sm:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle icon"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
