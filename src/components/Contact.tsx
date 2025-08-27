import React from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => (
    <section
        id="contact"
        className="relative py-24 bg-gradient-to-b from-[#1e3a8a] via-[#1e40af] to-[#312e81] text-white"
    >
        <div className="container mx-auto px-6 text-center">
            {/* Heading */}
            <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 drop-shadow-lg">
                Get In Touch
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-10">
                I&apos;m always excited to collaborate on impactful AI and data science projects.
                Let&apos;s create smarter, data-driven solutions together!  
                My inbox is always open — feel free to reach out.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col items-center gap-4 mb-10">
                <p className="flex items-center gap-3 text-lg font-medium text-white/90 hover:text-cyan-300 transition">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:mugunddhan3@gmail.com" className="hover:underline">
                        mugunddhan3@gmail.com
                    </a>
                </p>
            </div>

            {/* Email Button
            <a
                href="mailto:mugunddhan3@gmail.com"
                className="inline-block px-10 py-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20
                           shadow-lg text-lg font-semibold text-white transition-all duration-300
                           hover:scale-105 hover:bg-white/20 hover:border-cyan-400 hover:shadow-cyan-500/50"
            >
                Email Me
            </a> */}
        </div>

        {/* Decorative Glow Effect */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
    </section>
);

export default Contact;
