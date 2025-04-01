// src/components/Navbar.js
import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons from react-icons

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 fixed top-0 w-full z-10 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <span className="font-bold text-xl">Shrisant Adhikari</span>
        <div className="hidden md:flex space-x-6 items-center"> {/* Added items-center */}
          <a href="#hero" className="hover:text-indigo-400 transition duration-300">Home</a>
          <a href="#about" className="hover:text-indigo-400 transition duration-300">About</a>
          <a href="#skills" className="hover:text-indigo-400 transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-indigo-400 transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition duration-300">Contact</a>
          <button onClick={toggleTheme} className="focus:outline-none ml-4">
            {theme === 'dark' ? (
              <FaSun className="h-6 w-6 text-yellow-400" />
            ) : (
              <FaMoon className="h-6 w-6 text-gray-300" />
            )}
          </button>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center"> {/* Added flex items-center */}
          <button onClick={toggleTheme} className="focus:outline-none mr-4">
            {theme === 'dark' ? (
              <FaSun className="h-6 w-6 text-yellow-400" />
            ) : (
              <FaMoon className="h-6 w-6 text-gray-300" />
            )}
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <RxCross2 className="h-6 w-6" />
            ) : (
              <IoMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900 py-2 dark:bg-gray-800`}>
        <div className="flex flex-col items-center space-y-2">
          <a href="#hero" className="hover:text-indigo-400 transition duration-300 block py-2" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="hover:text-indigo-400 transition duration-300 block py-2" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="hover:text-indigo-400 transition duration-300 block py-2" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="hover:text-indigo-400 transition duration-300 block py-2" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition duration-300 block py-2" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;