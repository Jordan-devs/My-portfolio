import React, { useState } from "react";
import { navLinks } from "../Constant";
import Button from "../Components/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const NavItems = ({ onClick = () => {} }) => {
    return (
      <ul className="nav-ul">
        {navLinks.map(({ id, href, name }) =>
          id === 5 ? (
            <Button name={name} containerClass={"nav-li cursor-pointer"} />
          ) : (
            <a href={href} className="nav-li">
              <li
                key={id}
                className="nav-li_a cursor-pointer"
                onClick={onClick}
              >
                {name}
              </li>
            </a>
          )
        )}
      </ul>
    );
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
            className="text-neutral-400 hover:text-white focus:outline-none  flex sm:hidden cursor-pointer"
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

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
