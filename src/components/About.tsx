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
                            Hi, I&apos;m <span className="text-white font-semibold">Dhev Mugunddhan A</span> — a  
                            <strong className="text-white font-semibold"> Technical Lead </strong> 
                             at <span className="text-white font-semibold">HCLTech</span>, specializing in developing and deploying innovative Generative AI solutions. Graduated with a B.Tech in Artificial Intelligence and Data Science (CGPA: 9.3/10.0) from Shiv Nadar University, Chennai.
                        </p>

                        {/* <p className="text-lg leading-relaxed text-blue-100 mb-6">
                            I specialize in developing <strong className="text-white font-semibold">end-to-end AI models</strong>, 
                            <strong className="text-white font-semibold"> deep learning pipelines</strong>, and 
                            <strong className="text-white font-semibold"> full-stack data-driven applications</strong>. My work spans 
                            <strong className="text-white font-semibold"> computer vision</strong>, 
                            <strong className="text-white font-semibold"> NLP</strong>, 
                            <strong className="text-white font-semibold"> recommendation systems</strong>, and 
                            <strong className="text-white font-semibold"> forecasting models</strong>, leveraging 
                            <strong className="text-white font-semibold"> PyTorch</strong>, 
                            <strong className="text-white font-semibold"> TensorFlow</strong>, 
                            <strong className="text-white font-semibold"> Keras 3</strong>, 
                            <strong className="text-white font-semibold"> PostgreSQL</strong>, and 
                            <strong className="text-white font-semibold"> cloud platforms</strong>.
                        </p> */}

                        <p className="text-lg leading-relaxed text-blue-100 mb-6">
                            During my <strong className="text-white font-semibold">tenure at HCL Technologies</strong>, 
                            I have contributed across multiple roles, progressing from an intern to a  
                            <strong className="text-white font-semibold"> Technical Lead</strong>. 
                            In my current position, I architected a  
                            <strong className="text-white font-semibold"> proactive monitoring system powered by Generative AI agents</strong> 
                            (LangChain, OpenAI) capable of autonomously parsing logs, detecting failures, and generating 
                            intelligent healing recommendations. I engineered a  
                            <strong className="text-white font-semibold"> prompt-driven action generator</strong> to draft corrective 
                            messages for classified failures and integrated the system with 
                            <strong className="text-white font-semibold"> Microsoft Teams using the Graph API</strong>, enabling a 
                            fully automated, self-healing operational workflow.
                            <br /><br />
                            Earlier, as an intern, I developed and deployed 
                            <strong className="text-white font-semibold"> commodity price forecasting systems</strong>, designed 
                            <strong className="text-white font-semibold"> cloud-integrated databases</strong>, and explored 
                            <strong className="text-white font-semibold"> GenAI-driven supply chain optimization</strong>. 
                            I have also built projects such as 
                            <strong className="text-white font-semibold"> skin lesion classification models</strong>, 
                            <strong className="text-white font-semibold"> abstractive summarization consistency evaluators</strong>, 
                            and a <strong className="text-white font-semibold"> Flask-based movie recommendation system</strong>.
                        </p>

                        <p className="text-lg leading-relaxed text-blue-100">
                            I’m <strong className="text-white font-semibold">highly ambitious</strong> and passionate about working on 
                            <strong className="text-white font-semibold"> AI-first products</strong> that solve 
                            <strong className="text-white font-semibold"> real-world problems</strong> at scale. Feel free to explore the sections below to learn more about my 
                            <strong className="text-white font-semibold"> expertise</strong>, 
                            <strong className="text-white font-semibold"> projects</strong>, and 
                            <strong className="text-white font-semibold"> skills</strong>, and don’t hesitate to 
                            <strong className="text-white font-semibold"> reach out</strong> using the contact details provided below 
                            for opportunities, collaborations, or discussions.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
