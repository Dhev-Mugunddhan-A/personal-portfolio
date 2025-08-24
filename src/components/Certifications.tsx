import React from 'react';

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm8 0a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V6h-1a1 1 0 110-2h1V3a1 1 0 011-1zm-4 5a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1H6a1 1 0 110-2h1V8a1 1 0 011-1zm8 5a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);

const Certifications = () => {
    const certs = [
        { name: "Top 6 Finalist in TechViz", issuer: "BITS Pilani", link: "#" },
        { name: "Programming in Java - NPTEL (Top 5% Elite+Gold)", issuer: "NPTEL", link: "#" },
        { name: "Blockchain & its applications - NPTEL (Top 5%)", issuer: "NPTEL", link: "#" },
        { name: "System Design For Sustainability - NPTEL (Top 2%)", issuer: "NPTEL", link: "#" },
        { name: "Deep Learning Specialization", issuer: "Coursera", link: "#" },
        { name: "LeetCode 50+ Problems Solved", issuer: "LeetCode", link: "https://leetcode.com/u/Dhev-Mugunddhan/" },
    ];

    return (
        <section id="certifications" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Achievements & Certifications</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certs.map((cert, index) => (
                        <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="block p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-300">
                            <div className="flex items-center">
                                <SparklesIcon />
                                <div>
                                    <p className="font-semibold text-gray-800">{cert.name}</p>
                                    <p className="text-sm text-gray-500">{cert.issuer}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Certifications;
