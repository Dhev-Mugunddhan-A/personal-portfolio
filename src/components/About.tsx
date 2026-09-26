import React from 'react';
import Image from 'next/image';
import profilePic from '../Images/prof pic.jpg'; // Ensure this path is correct

const About = () => (
    <section
        id="about"
        className="py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700"
    >
        <div className="container mx-auto px-6">
            {/* Heading */}
            <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-100 via-white to-violet-200 bg-clip-text text-transparent drop-shadow-md">
                About Me
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                {/* Profile Image with soft glow */}
                <div className="md:w-1/3 flex justify-center">
                    <div className="relative p-1 rounded-full bg-gradient-to-br from-blue-300 via-indigo-400 to-violet-500 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
                        <Image
                            src={profilePic}
                            alt="Dhev Mugunddhan A"
                            className="rounded-full"
                            width={300}
                            height={300}
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 blur-lg opacity-30"></div>
                    </div>
                </div>

                
                <div className="md:w-2/3">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10">
                        <p className="text-lg leading-relaxed text-blue-100 mb-6">
                            Welcome! I&apos;m <span className="text-white font-semibold">Dhev Mugunddhan A</span>, an
                            <strong className="text-white font-semibold"> AI Engineer and Technical Lead</strong> at
                            <span className="text-white font-semibold"> HCLTech</span> bridging the gap between deep learning research and high-scale enterprise cloud systems.
                            Holding a B.Tech in AI &amp; Data Science (CGPA: 9.3/10.0) from Shiv Nadar University, I specialize in architecting production-grade
                            Generative AI agents and event-driven serverless architectures on AWS. Over my tenure at HCLTech, I have managed the full end-to-end SDLC
                            for enterprise systems—orchestrating a massive AWS footprint spanning 20+ mono-repos, 100+ Lambdas, and 10+ Step Functions.
                        </p>

                        <p className="text-lg leading-relaxed text-blue-100 mb-6">
                            Driven by building AI-first platforms, I engineered an autonomous self-healing monitoring system using
                             LangChain, OpenAI, and MS Teams to parse logs, classify failures, and trigger real-time operational fixes.
                            My expertise spans Azure-based commodity forecasting APIs, deep learning vision models (MedMamba, ViTs) for medical imaging, and leading technical teams.
                            Explore my portfolio below to see my work, or feel free to reach out to connect and collaborate!
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
