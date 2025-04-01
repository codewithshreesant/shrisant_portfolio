import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-24 text-white relative z-0 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-indigo-500 opacity-20 -ml-24 -mt-12 animate-pulse slow-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-purple-400 opacity-20 -mr-32 -mb-16 animate-pulse pulse"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <img
          src="images/hero.png" // Add your profile picture here
          alt="Shrisant Adhikari"
          className="rounded-full w-40 h-40 mx-auto mb-8 object-cover shadow-lg border-4 border-indigo-400 animate-fade-in"
          style={{ animationDuration: '1.2s' }}
        />
        <h1 className="text-5xl font-bold mb-6 animate-slide-up" style={{ animationDuration: '1s', animationDelay: '0.3s' }}>
          Hello, I'm <span className="text-yellow-400">Shrisant Adhikari</span>
        </h1>
        <p className="text-xl mb-10 animate-slide-up" style={{ animationDuration: '1s', animationDelay: '0.5s' }}>
          A passionate <span className="font-semibold">full-stack (MERN) developer</span> and CSIT student eager to build amazing <span className="text-teal-300">web experiences</span>.
        </p>
        <div className="flex justify-center items-center space-x-4 animate-bounce" style={{ animationDelay: '0.8s', animationIterationCount: 'infinite', animationDirection: 'alternate' }}>
          <a
            href="#projects"
            className="bg-yellow-400 hover:bg-yellow-500 text-indigo-700 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-md"
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5l-14 7 14 7M5 12h14" />
              </svg>
              View My Work
            </span>
          </a>
          {/* You could add links to your social media or other relevant pages here */}
          {/* <a href="#" className="text-yellow-300 hover:text-yellow-400 transition duration-300">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 4.97a.75.75 0 01.707-.29.75.75 0 01.08.708l-2.2 2.2c.08.08.16.16.24.24.414.413.854.617 1.297.617.443 0 .883-.204 1.297-.617a.75.75 0 011.06 1.06l-2.2 2.2a.75.75 0 01-.708.29.75.75 0 01-.707-.29l-2.2-2.2a.75.75 0 01.29-.708.75.75 0 01.707.29l2.2 2.2c-.08-.08-.16-.16-.24-.24-.414-.413-.854-.617-1.297-.617-.443 0-.883.204-1.297.617a.75.75 0 01-1.06-1.06l2.2-2.2a.75.75 0 01.708-.29.75.75 0 01.707.29l2.2 2.2c.08.08.16.16.24.24.414.413.854.617 1.297.617.443 0 .883-.204 1.297-.617a.75.75 0 011.06 1.06l-2.2 2.2a.75.75 0 01-.29.708.75.75 0 01-.707-.29l-2.2-2.2a.75.75 0 01.708-.29.75.75 0 01.707.29l2.2 2.2c-.08-.08-.16-.16-.24-.24-.414-.413-.854-.617-1.297-.617-.443 0-.883.204-1.297.617a.75.75 0 01-1.06-1.06l2.2-2.2a.75.75 0 01.29-.708z" clipRule="evenodd" />
            </svg>
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;