import React from 'react';

const SparklesIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-3 text-yellow-400 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path
            fillRule="evenodd"
            d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm8 0a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V6h-1a1 1 0 110-2h1V3a1 1 0 011-1zm-4 5a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1H6a1 1 0 110-2h1V8a1 1 0 011-1zm8 5a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
            clipRule="evenodd"
        />
    </svg>
);

const Certifications = () => {
    const certs = [
        { name: "Programming in Java - NPTEL (Top 5% Elite+Gold)", issuer: "NPTEL", link: "https://drive.google.com/file/d/1AqWrBWCiILhuZclKQWAUOC2qUg6Rj-wF/view?usp=share_link" },
        { name: "Blockchain & its applications - NPTEL (Top 5%)", issuer: "NPTEL", link: "https://drive.google.com/file/d/1bNf_HyCbfbZKinE-oqY0S0ymtoUFf1Uq/view?usp=sharing" },
        { name: "System Design For Sustainability - NPTEL (Top 2%)", issuer: "NPTEL", link: "https://drive.google.com/file/d/1O8i4bdsHsD3Oioowku380G_4qckg8aXr/view?usp=sharing" },
        { name: "Deep Learning Specialization", issuer: "Coursera", link: "https://www.coursera.org/account/accomplishments/specialization/FLJBCA4NTNJK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n" },
        { name: "Big Data 101", issuer: "IBM", link: "https://drive.google.com/file/d/1sEhMVfxozhWeoPW6mRcZDD463tfAcUu9/view?usp=sharing" },
        { name: "SQL for Data Analytics" , issuer: "Internshala Trainings", link: "https://drive.google.com/file/d/1vkJ3yDbYXmTANtZKH_BXrNywzeO07uC6/view?usp=sharing"},
        { name: "Git Essential Trainings", issuer:"LinkedIn Learning", link: "https://drive.google.com/file/d/1Rx9Qhp_kLpJTI4d87RUFWzT_0njShTSo/view?usp=sharing"},
        { name: "Introduction to Quantum Computing: Quantum Algorithms and Qiskit", issuer:"NPTEL", link:"https://drive.google.com/file/d/1f04eJk-tbTXY_F1937yby3CXadSOZsSg/view?usp=sharing"},
        { name: "Software Engineering Job Simulation", issuer: "JP Morgan Chase & Co", link:"https://drive.google.com/file/d/1h9p-xwh_wgZy0fT4FRkcaj9zYt1SyE34/view?usp=sharing"},        
    ];

    const achieve = [
        { name: "Top 6 Finalist in TechViz", issuer: "BITS Pilani", link: "https://drive.google.com/file/d/1hXHltY_nzTcohcwTr1Tbbyivb4Su_ws0/view?usp=sharing" },
        { name: "LeetCode 50+ Problems Solved", issuer: "LeetCode", link: "https://leetcode.com/u/Dhev-Mugunddhan/" },
        { name: "Kaggle Expert", issuer: "Kaggle", link: "https://www.kaggle.com/dhevmugunddhana333" },
        { name: "HackerRank 3-star Silver Problem solver Badge", issuer: "HackerRank", link: "https://www.hackerrank.com/profile/mugunddhan3" },
    ];

    return (
        <section id="certifications" className="py-20 bg-gradient-to-b from-violet-900 via-blue-900 to-violet-950">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-extrabold text-center text-white mb-16 tracking-wide drop-shadow-lg">
                    Certifications
                </h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certs.map((cert, index) => (
                        <a
                            href={cert.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-md 
                                       hover:shadow-violet-400/50 hover:scale-[1.03] transition-transform duration-300"
                        >
                            <div className="flex items-center">
                                <SparklesIcon />
                                <div>
                                    <p className="font-semibold text-white">{cert.name}</p>
                                    <p className="text-sm text-blue-200">{cert.issuer}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Achievements Section */}
            <div className="py-20">
                <div className="container mx-auto px-6 mt-12">
                    <h2 className="text-5xl font-extrabold text-center text-white mb-16 tracking-wide drop-shadow-lg">
                        Achievements
                    </h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {achieve.map((achieve, index) => (
                            <a
                                href={achieve.link}
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-md 
                                           hover:shadow-blue-400/50 hover:scale-[1.03] transition-transform duration-300"
                            >
                                <div className="flex items-center">
                                    <SparklesIcon />
                                    <div>
                                        <p className="font-semibold text-white">{achieve.name}</p>
                                        <p className="text-sm text-violet-300">{achieve.issuer}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
