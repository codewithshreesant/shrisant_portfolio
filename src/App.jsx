// src/App.js
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css'; // Keep this for your animations

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="font-sans transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-16"> {/* Changed mt-16 to pt-16 */}
        <section id="hero" className="py-20 bg-light text-dark">
          <Hero />
        </section>
        <section id="about" className="py-16 bg-white text-gray-700">
          <About />
        </section>
        <section id="skills" className="py-16 bg-light text-dark">
          <Skills />
        </section>
        <section id="projects" className="py-16 bg-white text-gray-700">
          <Projects />
        </section>
        <section id="contact" className="py-16 bg-light text-dark">
          <Contact />
        </section>
      </main>
      <Footer className="py-4 bg-gray-800 text-white" />
    </div>
  );
}

export default App;