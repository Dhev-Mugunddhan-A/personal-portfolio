import React from 'react';

const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="bg-gray-200 text-gray-700 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
        {skill}
    </span>
);

const Skills = () => {
    const programmingLanguages = ["Python", "Java", "C", "MySQL", "Postgresql", "JavaScript", "HTML/CSS", "MERN", "Bash"];
    const librariesFrameworks = ["Tensorflow", "Keras 3", "PyTorch", "Librosa", "Flask", "Hadoop", "PySpark", "MLFlow", "Plotly"];
    const otherTools = ["Tableau", "Excel", "Google Colab", "Git/GitHub/GitLab", "PgAdmin4", "AWS Sagemaker", "AWS Cloud services"];

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Skills</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Programming Languages</h3>
                        <div className="flex flex-wrap">
                            {programmingLanguages.map((skill, index) => <SkillBadge key={index} skill={skill} />)}
                        </div>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Libraries & Frameworks</h3>
                        <div className="flex flex-wrap">
                            {librariesFrameworks.map((skill, index) => <SkillBadge key={index} skill={skill} />)}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Databases & Tools</h3>
                        <div className="flex flex-wrap">
                            {otherTools.map((skill, index) => <SkillBadge key={index} skill={skill} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Skills;
