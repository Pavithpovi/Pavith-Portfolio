import { useState, useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Modal from './components/Modal';
import Rexopro from './components/Rexopro';

export default function App() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.12
        });

        revealElements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleOpenModal = (projectKey) => {
        setSelectedProject(projectKey);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* 3D WebGL Background Particle Canvas & Image */}
            <ThreeBackground />

            {/* Navigation Bar */}
            <Navbar />

            {/* Main Application Sections */}
            <main className="content-wrapper">
                <Hero />
                <Profile />
                <Skills />
                <Projects onOpenModal={handleOpenModal} />
                <Rexopro />
                <Experience />
                <Publications />
                <Contact />
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-container">
                    <p>&copy; {new Date().getFullYear()} Pavith S. Designed & Crafted with Passion.</p>
                    <div className="footer-links">
                        <a href="https://github.com/Pavithpovi" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/spavith" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="mailto:pavithbabuji@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </footer>

            {/* Dynamic Project Deep-Dive Modal */}
            <Modal 
                isOpen={isModalOpen} 
                projectKey={selectedProject} 
                onClose={handleCloseModal} 
            />
        </>
    );
}
