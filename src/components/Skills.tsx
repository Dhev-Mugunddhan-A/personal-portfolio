"use client";
import React from "react";

const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-medium mr-2 mb-2 px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-white/20 transition">
        {skill}
    </span>
);

const Skills = () => {
    const programmingLanguages = ["Python", "Java", "C", "MySQL", "PostgreSQL", "JavaScript", "HTML/CSS", "MERN", "Bash"];
    const librariesFrameworks = ["TensorFlow", "Keras 3", "PyTorch", "HuggingFace", "OpenCV", "Librosa", "Flask", "Hadoop", "PySpark", "MLFlow", "Plotly", "Pandas", "scikit-learn", "NLTK", "Spacy"];
    const otherTools = ["Tableau", "Excel", "Docker", "Git/GitHub/GitLab", "PgAdmin4", "AWS Sagemaker", "AWS Cloud Services"];
    const languages = ["English - Fluent", "Tamil - Native", "Hindi - Basic"];

    return (
        <section
            id="skills"
            className="py-20 bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-900 text-white"
        >
            <div className="container mx-auto px-8">
                {/* Section Heading */}
                <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight drop-shadow-lg">
                    Skills
                </h2>

                <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-10">
                    {/* Programming Languages */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-white mb-4">Programming Languages</h3>
                        <div className="flex flex-wrap">
                            {programmingLanguages.map((skill, index) => (
                                <SkillBadge key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Libraries & Frameworks */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-white mb-4">Libraries & Frameworks</h3>
                        <div className="flex flex-wrap">
                            {librariesFrameworks.map((skill, index) => (
                                <SkillBadge key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Other Tools & Technologies */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-white mb-4">Other Tools & Technologies</h3>
                        <div className="flex flex-wrap">
                            {otherTools.map((skill, index) => (
                                <SkillBadge key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
                        <div className="flex flex-wrap">
                            {languages.map((skill, index) => (
                                <SkillBadge key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
