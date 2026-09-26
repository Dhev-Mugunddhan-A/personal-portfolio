import React from "react";
import Image from "next/image";
import hcllogo from "../Images/hcllogo.png";
import internshalalogo from "../Images/InternShala-logo.png";
import academorlogo from "../Images/ACADEMOR.png";

const Experience = () => {
    const experiences = [
        {
            role: "Technical Lead",
            company: "HCLTech, Chennai, Tamilnadu, India",
            duration: "Sep 2025 - Present",
            logo: hcllogo,
            points: [
                <>
                    <strong>Engineered &amp; Deployed Scalable Serverless Infrastructure:</strong> Architected, developed, and maintained a mission-critical, event-driven serverless ecosystem in Python on AWS for the Scania enterprise project, owning the full SDLC from core development and SIT/UAT validation to production deployment and tier-3 support.
                </>,
                <>
                    <strong>Managed Large-Scale Enterprise Footprint:</strong> Maintained a high-throughput codebase distributed across 20+ mono-repos (hundreds of thousands of lines of code) and an extensive AWS footprint comprising 100+ Lambda functions, 10+ Step Functions workflows, API Gateway, ElastiCache (Redis), S3, EC2, OpenSearch, and granular IAM security configurations.
                </>,
                <>
                    <strong>Driven AI Innovation & Observability:</strong> Developed a proactive monitoring and self-healing system using LangChain and OpenAI to autonomously parse logs, classify failures, and trigger corrective actions via MS Teams (Graph API integration); ideated Agentic AI workflows that optimized SDLC processes and accelerated L2 support resolution.
                </>,
                <>
                    <strong>Leadership & Talent Acquisition:</strong> Led technical hiring initiatives by conducting 100+ Technical Round 1 (TP1) interviews and provided direct mentorship to onboard and upskill 5 new team members.
                </>
            ],
        },
        
        {
            role: "AI & Data Science Intern",
            company: "HCLTech, Chennai, Tamilnadu, India",
            duration: "May 2024 - July 2024",
            logo: hcllogo,
            points: [
                "Developed and evaluated forecasting models to predict commodity prices, identifying SARIMAX as the most effective model.",
                "Deployed the model as a web application using backend APIs and integrated it with a frontend.",
                "Designed database schema and created a PostgreSQL database on Azure cloud, building the entire data lifecycle.",
                "Ideated GenAI solutions for the Supply Chain domain and presented them to leadership.",
            ],
        },
        {
            role: "Paid AI & Data Science Content Creator",
            company: "Internshala Data & AI Club, Remote",
            duration: "Oct 2023 - Feb 2024",
            logo: internshalalogo,
            points: [
                "Collaborated with a community of creators, curating around 70 high-quality posts on hot topics in the AI and Data Science domain.",
                "Guided nascent creators and consistently met deadlines amidst academic responsibilities.",
            ],
        },
        {
            role: "Student Intern",
            company: "Academor, Remote",
            duration: "July 2023 - Aug 2023",
            logo: academorlogo,
            points: [
                "Learnt AI, ML algorithms and deploying techniques.",
                "Drafted a report on AI Applications in Logistics: Opportunities and Ethical Considerations based in Australia.",
            ],
        },
    ];

    return (
        <section
            id="experience"
            className="py-20 bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-600 font-sans"
        >
            <div className="container mx-auto px-6">
                {/* Heading */}
                <h2 className="text-4xl font-extrabold text-center text-white mb-14 tracking-tight">
                    Experience
                </h2>

                {/* Experience Cards */}
                <div className="max-w-5xl mx-auto space-y-10">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-5">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {exp.role}
                                    </h3>
                                    <p className="text-indigo-100 font-medium text-lg">
                                        {exp.company}
                                    </p>
                                    <p className="text-indigo-200 text-sm mt-1">
                                        {exp.duration}
                                    </p>
                                </div>
                                <Image
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    className="object-contain flex-shrink-0 ml-4 rounded-lg border border-white/30"
                                    height={100}
                                    width={100}
                                />
                            </div>

                            {/* Points */}
                            <ul className="list-disc list-inside text-indigo-100 space-y-2 ml-5 leading-relaxed">
                                {exp.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
