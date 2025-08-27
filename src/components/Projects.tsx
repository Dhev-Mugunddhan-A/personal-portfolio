import React from 'react';
import Image, { StaticImageData } from 'next/image';
import skinlesion from '../Images/skinlesion.jpeg';
import textsum from '../Images/textsum.png';
import movierec from '../Images/movierec.png';
import javaapp from '../Images/java-app.png';
import heuristic from '../Images/heuristic.png';
import { title } from 'process';

const ProjectCard = ({ title, imagePath, description, tags, githubLink }: { 
    title: string,
    imagePath: StaticImageData, 
    description: string, 
    tags: string[], 
    githubLink: string 
}) => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col hover:shadow-blue-400/40">
        <Image 
            src={imagePath} 
            alt={title} 
            className="w-full h-56 object-contain bg-gradient-to-b from-blue-800 to-blue-600" 
            width={600} 
            height={600} 
        />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-blue-100 mb-4 flex-grow">{description}</p>
            <div className="mb-4 flex flex-wrap">
                {tags.map((tag, index) => (
                    <span 
                        key={index} 
                        className="bg-blue-700/30 border border-blue-400/30 text-blue-200 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-300 font-semibold hover:underline hover:text-blue-200 transition-colors mt-auto"
            >
                View on GitHub &rarr;
            </a>
        </div>
    </div>
);

const Projects = () => {
    const projectData = [
        {
            title: "Skin Lesion Classification",
            imagePath: skinlesion,
            description: "Built MedMamba, ViTs, ResNets, and other models with ensembling on ISIC datasets. Performed extensive EDA, class imbalance handling, and feature engineering in an end-to-end ML pipeline.",
            tags: ["PyTorch", "Keras 3", "OpenCV", "Scikit-learn"],
            githubLink: "https://github.com/Dhev-Mugunddhan-A/SKIN-LESION-CLASSIFICATION"
        },
        
        {
            title: "Movie Recommendation System",
            imagePath: movierec,
            description: "Designed a full-stack web app with a content-based filtering recommender system on the IMDB dataset, using PostgreSQL for the backend and Flask for the server.",
            tags: ["Scikit-learn", "Flask", "PostgreSQL", "HTML/CSS"],
            githubLink: "https://github.com/Dhev-Mugunddhan-A/Movie-recommendation-system-on-web-with-flask"
        },
        {
            title: "Factual Consistency of Text Summarization",
            imagePath: textsum,
            description: "Evaluated abstractive text summarization by performing NLP preprocessing and generating sentence embeddings using various models like TF-IDF and BERT.",
            tags: ["PyTorch", "NLTK", "SpaCy", "HuggingFace"],
            githubLink: "https://github.com/Dhev-Mugunddhan-A/"
        },
        {
            title: "Multipurpose To-Do List Creator",
            imagePath: javaapp,
            description: "This project is a versatile Java-based GUI application designed to simplify daily organizational tasks. Built using JSwing and AWT events, it offers a user-friendly interface for creating and managing various types of lists.",
            tags: ["Java", "JSwing", "AWT Events", "GUI Programming"],
            githubLink: "https://github.com/Dhev-Mugunddhan-A/multipurpose-to-do-list-creator-GUI-using-Java"
        },
        {
            title: "Neural Network weight optimization using meta heuristic algorithms", 
            imagePath: heuristic,
            description: "This project optimizes an Artificial Neural Network's (ANN) weights for a classification problem using three meta-heuristic algorithms. It compares the performance of Ant Colony Optimization (ACO), Particle Swarm Optimization (PSO), and Genetic Algorithms (GA) to determine which nature-inspired method most effectively improves the ANN's accuracy and efficiency.",
            tags: ["Python", "Tensorflow","Scikit-Learn","Pandas","Matplotlib","OOPS"],
            githubLink: "https://github.com/Dhev-Mugunddhan-A/Neural-Network-weight-optimization-using-meta-heuristic-algorithms"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-extrabold text-center text-white drop-shadow-lg mb-16 tracking-wide">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
