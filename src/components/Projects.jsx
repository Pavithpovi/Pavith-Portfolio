import React from 'react';
import imgMicrogrid from '../assets/proj_microgrid.png';
import imgFitness from '../assets/proj_fitness.png';
import imgEvents from '../assets/proj_events.png';
import imgAnimalWorld from '../assets/proj_animal_world.png';
import imgNatureLove from '../assets/proj_nature_love.png';

const projects = [
    {
        id: "nature_love",
        year: "2026",
        icon: "fa-solid fa-heart project-icon-type text-neon-pink",
        title: "Rexopro Nature Love",
        shortDesc: "An immersive digital catalog showcasing environmental beauties and forestry conservation efforts.",
        tags: ["React", "Tailwind CSS", "Vercel"],
        img: imgNatureLove,
        liveUrl: "https://rexopro-nature-love.vercel.app/"
    },
    {
        id: "animal_world",
        year: "2026",
        icon: "fa-solid fa-leaf project-icon-type text-neon-green",
        title: "Rexopro Animal World",
        shortDesc: "An immersive digital book catalog showing wild animals in a moody, atmospheric, and forest estate style.",
        tags: ["React", "Tailwind CSS", "Vercel"],
        img: imgAnimalWorld,
        liveUrl: "https://rexopro-animal-book-world.vercel.app/"
    },
    {
        id: "microgrid",
        year: "2026",
        icon: "fa-solid fa-bolt project-icon-type text-neon-yellow",
        title: "Self-Learning Microgrid Energy Optimization",
        shortDesc: "Machine learning algorithms to analyze power generation, consumption, and storage patterns within a microgrid.",
        tags: ["Machine Learning", "Python", "Optimization"],
        img: imgMicrogrid
    },
    {
        id: "fitness",
        year: "2025",
        icon: "fa-solid fa-heart-pulse project-icon-type text-neon-pink",
        title: "Application for Fitness Suggestion",
        shortDesc: "Smart health application providing personalized workout plans, diet recommendations, and health tracking indicators.",
        tags: ["React", "CSS Modules", "API Integration"],
        img: imgFitness
    },
    {
        id: "events",
        year: "2024",
        icon: "fa-solid fa-calendar-days project-icon-type text-neon-teal",
        title: "College Event Management System",
        shortDesc: "Web-based portal designed to simplify the planning, scheduling, and participant management of campus events.",
        tags: ["JavaScript", "HTML/CSS", "SQL"],
        img: imgEvents
    }
];

export default function Projects({ onOpenModal }) {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const w = rect.width;
        const h = rect.height;

        const xPercent = (x / w) - 0.5;
        const yPercent = (y / h) - 0.5;

        const rotateX = -yPercent * 16;
        const rotateY = xPercent * 16;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        card.style.setProperty('--mouse-x', `${(x / w) * 100}%`);
        card.style.setProperty('--mouse-y', `${(y / h) * 100}%`);
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
    };

    return (
        <section id="projects" className="projects-section reveal">
            <div className="container">
                <div className="section-title-wrapper">
                    <h2 className="section-title">Projects Showcase</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="projects-grid">
                    {projects.map((proj) => (
                        <div
                            key={proj.id}
                            className="glass-card project-card"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => onOpenModal(proj.id)}
                            style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px)' }}
                        >
                            <div className="project-glow"></div>
                            <div className="project-card-inner">
                                <div className="project-header">
                                    <span className="project-year">{proj.year}</span>
                                    <i className={proj.icon}></i>
                                </div>
                                <div className="project-image-container">
                                    <img src={proj.img} alt={proj.title} className="project-card-img" />
                                </div>
                                <h3 className="project-title">{proj.title}</h3>
                                <p className="project-short-desc">{proj.shortDesc}</p>
                                <div className="project-tags">
                                    {proj.tags.map((tag, idx) => (
                                        <span key={idx}>{tag}</span>
                                    ))}
                                </div>
                                <div className="project-actions" style={{ display: 'flex', gap: '20px' }}>
                                    <button 
                                        className="btn btn-card-link"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onOpenModal(proj.id);
                                        }}
                                    >
                                        Read Deep-Dive <i className="fa-solid fa-angle-right"></i>
                                    </button>
                                    {proj.liveUrl && (
                                        <a 
                                            href={proj.liveUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="btn btn-card-link"
                                            onClick={(e) => e.stopPropagation()}
                                            style={{ color: 'var(--neon-teal)' }}
                                        >
                                            Visit Live <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.8rem' }}></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
