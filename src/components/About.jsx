import React, { useEffect, useRef, useState } from 'react';

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(sectionRef.current);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-20 bg-secondary text-secondary-content animate-slide-in-left ${isVisible ? 'slide-in' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-semibold text-primary-content mb-4 animate-fade-in-down"
            style={{ animationDuration: '1s' }}
          >
            More About Me
          </h2>
          <p className="text-lg text-secondary-content italic animate-fade-in-down" style={{ animationDuration: '1.2s', animationDelay: '0.2s' }}>
            A journey fueled by curiosity and a passion for crafting digital solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg shadow-lg overflow-hidden animate-slide-up" style={{ animationDuration: '0.8s', animationDelay: '0.3s' }}>
            <img
              src="images/about.png" // Replace with a relevant image
              alt="About Shrisant"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className={`animate-slide-right ${isVisible ? 'slide-in' : ''}`}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-primary-content mb-2">The Beginning</h3>
              <p
                className="leading-relaxed text-justify"
                style={{ animationDuration: '0.8s', animationDelay: '0.4s' }}
              >
                My fascination with web development sparked in the 10th grade. What started as simple curiosity quickly evolved into a deep passion for the MERN stack (MongoDB, Express.js, React.js, Node.js). The ability to bring ideas to life through code was, and still is, incredibly exciting to me.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-primary-content mb-2">Education & Growth</h3>
              <p
                className="leading-relaxed text-justify"
                style={{ animationDuration: '0.8s', animationDelay: '0.6s' }}
              >
                Completing my science-focused education at Padmodaya Public Secondary School in 2023 provided a strong foundation. Currently, pursuing CSIT further enhances my understanding of the theoretical underpinnings of computer science, complementing my practical web development skills.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-content mb-2">Passion & Vision</h3>
              <p
                className="leading-relaxed text-justify"
                style={{ animationDuration: '0.8s', animationDelay: '0.8s' }}
              >
                I'm driven by the desire to create impactful and user-centric web applications. I believe in clean, efficient code and am always eager to explore new technologies and methodologies to refine my craft and contribute meaningfully to the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;