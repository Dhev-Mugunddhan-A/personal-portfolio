import React from 'react';

const Header = () => (
    <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-gray-800">Dhev Mugunddhan A</a>
            <div className="hidden md:flex space-x-6">
                <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
                <a href="#experience" className="text-gray-600 hover:text-gray-800">Experience</a>
                <a href="#education" className="text-gray-600 hover:text-gray-800">Education</a>
                <a href="#skills" className="text-gray-600 hover:text-gray-800">Skills</a>
                <a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a>
                <a href="#certifications" className="text-gray-600 hover:text-gray-800">Certifications</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
            </div>
        </nav>
    </header>
);
export default Header;

