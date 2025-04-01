import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projectsData = [
        {
            name: 'Video Stream',
            description: 'This is a full-stack video streaming web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Users can create accounts, log in, upload their own videos, interact with public videos by commenting and reacting, manage their profiles, and administrators have access to an admin panel for content management.',
            imageSrc: 'images/project1.jpg',
            liveLink: '#',
            repoLink: 'https://github.com/codewithshreesant/Video-Stream',
        },
        {
            name: 'Mail Application',
            description: 'This is a full-stack email web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with Tailwind CSS for styling. It allows users to compose, send, receive, and manage their emails with features like Inbox, Sent, Drafts, Recent, and Important folders. It also includes an admin panel for managing the application.',
            imageSrc: 'images/project2.jpg',
            liveLink: '#',
            repoLink: 'https://github.com/codewithshreesant/Mail-Application',
        },
        {
            name: 'Blog Application',
            description: 'This is a full-stack blog web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Users can browse blog posts, read individual articles, and leave comments. The application also features a recommendation system for related blogs on single blog pages, user authentication (login/signup), essential pages (Home, Blog listing, Contact), and a secure admin panel for content management.',
            imageSrc: 'images/project3.jpg',
            liveLink: 'https://shrisant-academy.vercel.app/',
            repoLink: 'https://github.com/codewithshreesant/Blog-Application',
        },
        // Add more projects as needed
    ];

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

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delayChildren: 0.2, staggerChildren: 0.1 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <section
            id="projects"
            ref={sectionRef}
            className={`py-12 bg-secondary text-secondary-content ${isVisible ? 'animate-slide-in-right slide-in' : ''
                }`}
        >
            <motion.div
                className="container mx-auto px-4"
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
            >
                <motion.h2
                    className="text-3xl font-semibold text-primary-content mb-8 text-center animate-fade-in-down"
                    style={{ animationDuration: '1s' }}
                    variants={cardVariants}
                >
                    My Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-primary rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-2 animate-slide-up"
                            style={{ animationDuration: '0.8s', animationDelay: `${0.3 + index * 0.1}s` }}
                            variants={cardVariants}
                        >
                            <img
                                src={project.imageSrc}
                                alt={project.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-primary-content mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-secondary-content text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.liveLink}
                                        className="inline-flex items-center justify-center bg-accent hover:bg-accent-focus text-primary-content font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent-focus focus:ring-opacity-50"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5 mr-2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V8.25m-9-5.25h10.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 00-2.25-2.25V8.25a2.25 2.25 0 012.25-2.25z"
                                            />
                                        </svg>
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.repoLink}
                                        className="inline-flex items-center justify-center bg-neutral hover:bg-neutral-focus text-primary-content font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-focus focus:ring-opacity-50"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5 mr-2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.34 0-2.517.616-3.316 1.526-1.125-.253-2.295-.46-3.452-.642C8.4 2.31 6.214 2.75 4.5 4.225c-1.938 1.938-1.937 5.018 0 6.956l7.504 7.504c.99.99 2.62.99 3.61 0l7.504-7.504c1.937-1.938 1.938-5.018 0-6.956z"
                                            />
                                        </svg>
                                        Repository
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;