import React from "react";
import Image from "next/image";
import snulogo from "../Images/snulogo.jpeg";
import cvmlogo from "../Images/CVMKRR-Logo.jpg";

const Education = () => {
    const educations = [
        {
            degree: "B.Tech in Artificial Intelligence and Data Science",
            institution: "Shiv Nadar University, Chennai, India",
            duration: "2021 - 2025",
            score: "CGPA: 9.3 / 10.0",
            logo: snulogo,
        },
        {
            degree: "CBSE Grade 12",
            institution: "Chettinad Vidya Mandir, Karur, India",
            duration: "2020 - 2021",
            score: "Marks: 96.4%",
            logo: cvmlogo,
        },
        {
            degree: "CBSE Grade 10",
            institution: "Chettinad Vidya Mandir, Karur, India",
            duration: "2018 - 2019",
            score: "Marks: 92.8%",
            logo: cvmlogo,
        },
    ];

    return (
        <section
            id="education"
            className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-violet-900 font-sans"
        >
            <div className="container mx-auto px-6">
                {/* Section Heading */}
                <h2 className="text-4xl font-extrabold text-center text-blue-100 mb-14 tracking-tight drop-shadow-lg">
                    Education
                </h2>

                {/* Education Cards Grid */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-10">
                    {educations.map((edu, index) => (
                        <div
                            key={index}
                            className="p-6 bg-blue-950/50 backdrop-blur-lg rounded-2xl shadow-xl 
                                       border border-blue-700/40 hover:border-blue-400 
                                       hover:shadow-blue-400/20 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start gap-4">
                                {/* Text Block */}
                                <div>
                                    <h3 className="text-xl font-bold text-blue-100">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-blue-300 font-medium">
                                        {edu.institution}
                                    </p>
                                    <p className="text-indigo-300 text-sm mt-1">
                                        {edu.duration}
                                    </p>
                                    <p className="text-cyan-200 font-semibold mt-2">
                                        {edu.score}
                                    </p>
                                </div>

                                {/* Logo */}
                                <Image
                                    src={edu.logo}
                                    alt={`${edu.institution} logo`}
                                    width={90}
                                    height={90}
                                    className="object-contain rounded-lg flex-shrink-0 ml-4 
                                               border border-blue-400/30 shadow-md shadow-blue-400/30"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
