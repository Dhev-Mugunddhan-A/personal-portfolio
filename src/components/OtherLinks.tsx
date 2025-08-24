import React from 'react';

const OtherLinks = () => {
    const links = [
        { name: "GitHub", url: "https://github.com/Dhev-Mugunddhan-Am" },
        { name: "LinkedIn", url: "https://linkedin.com/in/dhevmugunddhan/" },
        { name: "Kaggle", url: "https://www.kaggle.com/dhevmugunddhan" },
        { name: "LeetCode", url: "https://leetcode.com/u/Dhev-Mugunddhan/" }
    ];

    return (
        <section id="links" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Find Me Online</h2>
                <div className="flex justify-center flex-wrap gap-4">
                    {links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default OtherLinks;
