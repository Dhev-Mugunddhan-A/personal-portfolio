import React from 'react';

const AcademicCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12v7a2 2 0 002 2h18a2 2 0 002-2v-7" />
    </svg>
);

const Education = () => {
    const educations = [
        {
            degree: "B.Tech in Artificial Intelligence and Data Science",
            institution: "Shiv Nadar University, Chennai, India",
            duration: "2021 - 2025",
            score: "CGPA: 9.3 / 10.0"
        },
        {
            degree: "CBSE Grade 12",
            institution: "Chettinad Vidya Mandir, Karur, India",
            duration: "2020 - 2021",
            score: "Marks: 96.4%"
        }
    ];

    return (
        <section id="education" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Education</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {educations.map((edu, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                            <div className="flex items-start mb-2">
                                <AcademicCapIcon />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                                    <p className="text-gray-600 font-semibold">{edu.institution}</p>
                                    <p className="text-gray-500 text-sm mb-2">{edu.duration}</p>
                                    <p className="text-gray-700 font-bold">{edu.score}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Education;
