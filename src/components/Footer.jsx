import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 py-6 text-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shrisant Adhikari. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/codewithshreesant" 
            className="text-gray-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="www.linkedin.com/in/shreesant-adhikari-bb667322b" 
            className="text-gray-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/Shrisant130795?t=Ot6D9uuRYFPdVQvQg46oQg&s=09" 
            className="text-gray-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
       
        </div>
      </div>
      <div className="text-center">
        <p>phone: +977 9849601947</p>
      </div>
    </footer>
  );
}

export default Footer;