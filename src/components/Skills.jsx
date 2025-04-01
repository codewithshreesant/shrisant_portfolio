import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML', level: '90%' },
  { name: 'CSS', level: '85%' },
  { name: 'JavaScript', level: '80%' },
  { name: 'React.js', level: '75%' },
  { name: 'Node.js', level: '70%' },
  { name: 'Express.js', level: '70%' },
  { name: 'MongoDB', level: '65%' },
  { name: 'Tailwind CSS', level: '85%' },
  { name: 'Git', level: '75%' },
  // Add more skills as needed
];

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delayChildren: 0.2, staggerChildren: 0.1 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function Skills() {
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
    <motion.section
      ref={sectionRef}
      className="py-16 bg-light text-dark"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-semibold text-primary-content mb-6 text-center"
          variants={headingVariants}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-secondary rounded-lg shadow-md p-6"
              variants={skillItemVariants}
            >
              <h3 className="text-xl font-semibold text-secondary-content mb-2">
                {skill.name}
              </h3>
              <div className="bg-progress-bar-bg rounded-full h-4">
                <motion.div
                  className="bg-indigo-500 rounded-full h-4"
                  style={{ width: skill.level }}
                  layout // Enable layout animations for smooth width changes (optional)
                ></motion.div>
              </div>
              <p className="text-tertiary-content text-sm mt-1">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;