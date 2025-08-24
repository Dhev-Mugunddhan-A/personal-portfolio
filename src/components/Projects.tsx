import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, description, tags, githubLink }: { title: string, description: string, tags: string[], githubLink: string }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <Image src={`https://placehold.co/600x400/E2E8F0/4A5568?text=${encodeURIComponent(title)}`} alt={title} className="w-full h-56 object-cover" width={600} height={400} />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{description}</p>
            <div className="mb-4 flex flex-wrap">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline mt-auto">
                View on GitHub &rarr;
            </a>
        </div>
    </div>
);

const Projects = () => {
    const projectData = [
        {
            title: "Skin Lesion Classification",
            description: "Built MedMamba, ViTs, ResNets, and other models with ensembling on ISIC datasets. Performed extensive EDA, class imbalance handling, and feature engineering in an end-to-end ML pipeline.",
            tags: ["PyTorch", "Keras 3", "OpenCV", "Scikit-learn"],
            githubLink: "https://github.com/Dhev-Mugunddhan-Am"
        },
        {
            title: "Factual Consistency of Text Summarization",
            description: "Evaluated abstractive text summarization by performing NLP preprocessing and generating sentence embeddings using various models like TF-IDF and BERT.",
            tags: ["PyTorch", "NLTK", "SpaCy", "HuggingFace"],
            githubLink: "https://github.com/Dhev-Mugunddhan-Am"
        },
        {
            title: "Movie Recommendation System",
            description: "Designed a full-stack web app with a content-based filtering recommender system on the IMDB dataset, using PostgreSQL for the backend and Flask for the server.",
            tags: ["Scikit-learn", "Flask", "PostgreSQL", "HTML/CSS"],
            githubLink: "https://github.com/Dhev-Mugunddhan-Am"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
