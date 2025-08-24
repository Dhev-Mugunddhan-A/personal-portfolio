import React from 'react';

const Hero = () => (
    <section id="hero" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">AI & Data Science Engineer</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Building intelligent solutions and data-driven applications with a focus on efficiency and impact.</p>
            <a href="#projects" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg">
                View My Work
            </a>
        </div>
    </section>
);
export default Hero;
