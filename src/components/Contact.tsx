import React from 'react';

const Contact = () => (
    <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">I&apos;m currently seeking new opportunities and collaborations. My inbox is always open, so feel free to reach out!</p>
            <p className="text-lg text-gray-800 font-semibold mb-8">
                <a href="mailto:mugunddhan3@gmail.com" className="hover:underline">mugunddhan3@gmail.com</a> | <a href="tel:+919597469754" className="hover:underline">+91 9597469754</a>
            </p>
            <a href="mailto:mugunddhan3@gmail.com" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg">
                Email Me
            </a>
        </div>
    </section>
);
export default Contact;
