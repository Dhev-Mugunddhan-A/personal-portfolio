import React from 'react';
import Image from 'next/image';

const About = () => (
    <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 text-center mb-8 md:mb-0">
                    <Image 
                        src="https://placehold.co/300x300/E2E8F0/4A5568?text=Dhev" 
                        alt="Dhev Mugunddhan A" 
                        className="rounded-full mx-auto shadow-lg"
                        width={256}
                        height={256}
                    />
                </div>
                <div className="md:w-2/3 md:pl-12">
                    <p className="text-lg mb-4">
                        Hello! I'm Dhev Mugunddhan, a passionate and detail-oriented Artificial Intelligence and Data Science student at Shiv Nadar University. I thrive on solving complex problems and have a strong foundation in developing and evaluating machine learning models, particularly in forecasting and deep learning.
                    </p>
                    <p className="text-lg mb-4">
                        From designing database schemas on the cloud to building full-stack web applications, I enjoy working across the entire data lifecycle. I'm driven by a desire to create GenAI solutions that are not only innovative but also practical and impactful.
                    </p>
                </div>
            </div>
        </div>
    </section>
);
export default About;
