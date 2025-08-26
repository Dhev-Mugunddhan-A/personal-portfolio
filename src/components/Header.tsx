"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll to toggle styles dynamically
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? // Frosted glass glow effect when scrolled
                      "bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                    : // Solid blue gradient when at top
                      "bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 shadow-md"
            }`}
        >
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo / Name */}
                <a
                    href="#"
                    className="text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300"
                >
                    Dhev Mugunddhan A
                </a>

                {/* Navigation Links */}
                <div className="flex items-center space-x-4">
                    <a href="#about" className="text-gray-200 hover:text-white px-3 py-2 rounded-full hover:bg-blue-600/30 transition-all duration-300">About</a>
                    <a href="#experience" className="text-gray-200 hover:text-white px-3 py-2 rounded-full hover:bg-blue-600/30 transition-all duration-300">Experience</a>
                    <a href="#education" className="text-gray-200 hover:text-white px-3 py-2 rounded-full hover:bg-blue-600/30 transition-all duration-300">Education</a>
                    <a href="#skills" className="text-gray-200 hover:text-white px-3 py-2 rounded-full hover:bg-blue-600/30 transition-all duration-300">Skills</a>
                    <a href="#projects" className="text-gray-200 hover:text-white px-3 py-2 rounded-full hover:bg-blue-600/30 transition-all duration-300">Projects</a>
                    <a href="#contact" className="text-gray-200 hover:text-white px-3 py-2 rounded-full hover:bg-blue-600/30 transition-all duration-300">Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
