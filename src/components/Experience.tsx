import React from 'react';

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const Experience = () => {
    const experiences = [
        {
            role: "AI & Data Science Intern",
            company: "HCL Technologies, Chennai",
            duration: "May 2024 - July 2024",
            points: [
                "Developed and evaluated forecasting models to predict commodity prices, identifying SARIMAX as the most effective model.",
                "Deployed the model as a web application using backend APIs and integrated it with a frontend.",
                "Designed database schema and created a PostgreSQL database on Azure cloud, building the entire data lifecycle.",
                "Ideated GenAI solutions for the Supply Chain domain and presented them to leadership."
            ]
        },
        {
            role: "Paid AI & Data Science Content Creator",
            company: "Internshala Data & AI Club",
            duration: "Oct 2023 - Feb 2024",
            points: [
                "Collaborated with a community of creators, curating around 70 high-quality posts on hot topics in the AI and Data Science domain.",
                "Guided nascent creators and consistently met deadlines amidst academic responsibilities."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Experience</h2>
                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
                            <div className="flex items-start mb-2">
                                <BriefcaseIcon />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                                    <p className="text-gray-600 font-semibold">{exp.company}</p>
                                    <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-9">
                                {exp.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Experience;
