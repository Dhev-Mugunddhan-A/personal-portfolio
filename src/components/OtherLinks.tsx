import React from "react";

const OtherLinks = () => {
    const links = [
        { name: "GitHub", url: "https://github.com/Dhev-Mugunddhan-A" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/dhevmugunddhan/" },
        { name: "Kaggle", url: "https://www.kaggle.com/dhevmugunddhana333" },
        { name: "LeetCode", url: "https://leetcode.com/Dhev-Mugunddhan-A" },
        { name: "HackerRank", url: "https://www.hackerrank.com/profile/mugunddhan3" },
        { name: "Medium", url: "https://medium.com/@dhevmugunddhan" },
        { name: "Credly", url: "https://www.credly.com/users/dhev-mugunddhan-a" },
    ];

    return (
        <section
            id="links"
            className="py-20 bg-gradient-to-b from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] text-white"
        >
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">
                    Find Me Online
                </h2>
                <div className="flex justify-center flex-wrap gap-5">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg 
                                       text-lg font-semibold text-white transition-all duration-300 
                                       hover:scale-105 hover:bg-white/20 hover:border-cyan-400 hover:shadow-cyan-500/50"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherLinks;
