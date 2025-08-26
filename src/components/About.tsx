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
                            width={260}
                            height={260}
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 blur-lg opacity-30"></div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="md:w-2/3">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10">
                        <p className="text-lg leading-relaxed text-blue-100 mb-6">
                            Hello! I&apos;m <span className="text-white font-semibold">Dhev Mugunddhan</span>, a recent graduate with a Bachelor of Technology in
                            <strong className="text-white font-semibold"> AI and Data Science</strong> from Shiv Nadar University Chennai 
                            (<strong className="text-white font-semibold">CGPA: 9.3/10.0</strong>). I am passionate about crafting innovative and impactful data-driven solutions.
                        </p>
                        <p className="text-lg leading-relaxed text-blue-100 mb-6">
                            During my <strong className="text-white font-semibold">internship at HCLTech</strong>, I developed and deployed forecasting models, designed Azure-based database architectures, and ideated GenAI solutions to tackle supply chain challenges.
                        </p>
                        <p className="text-lg leading-relaxed text-blue-100">
                            I specialize in building <strong className="text-white font-semibold">end-to-end ML solutions</strong> — from data engineering pipelines to full-stack web applications and cloud infrastructure deployment on <strong className="text-white font-semibold">Azure</strong> and <strong className="text-white font-semibold">AWS</strong>. I leverage deep learning techniques in NLP and Computer Vision to solve real-world AI problems while excelling at clear technical communication and effective collaboration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
