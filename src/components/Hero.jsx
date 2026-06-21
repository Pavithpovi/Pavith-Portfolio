import { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';

const words = [
    "Aspiring Software Developer",
    "Creative Web Designer",
    "Python Developer",
    "UI/UX Design Enthusiast"
];

export default function Hero() {
    const [typedText, setTypedText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timer;

        if (isDeleting) {
            timer = setTimeout(() => {
                setTypedText(currentWord.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            }, 40);
        } else {
            timer = setTimeout(() => {
                setTypedText(currentWord.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            }, 100);
        }

        if (!isDeleting && charIndex === currentWord.length) {
            timer = setTimeout(() => setIsDeleting(true), 1800);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex(prev => (prev + 1) % words.length);
        }

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-welcome">Welcome to my universe</span>
                    <h1 className="hero-name">PAVITH S</h1>
                    <div className="hero-subtitle-wrapper">
                        <span className="hero-subtitle">I'm a </span>
                        <span id="typewriter" className="typewriter-text">{typedText}</span>
                    </div>
                    <p className="hero-desc">
                        Passionate about crafting high-performance, visually striking, and responsive web applications with immersive interactive experiences.
                    </p>
                    <div className="hero-cta">
                        <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                            View Projects <i className="fa-solid fa-arrow-right"></i>
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                            Get In Touch
                        </button>
                    </div>
                    <div className="hero-socials">
                        <a href="https://github.com/Pavithpovi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/spavith" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="mailto:pavithbabuji@gmail.com" aria-label="Email">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href="tel:+919345321695" aria-label="Phone">
                            <i className="fa-solid fa-phone"></i>
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="profile-image-holder-50-50">
                        <div className="profile-image-glow"></div>
                        <div className="profile-image-inner">
                            <img src={profileImg} alt="Pavith S" className="profile-img-element" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <span className="mouse-icon">
                    <span className="wheel"></span>
                </span>
                <span className="scroll-text">Scroll Down</span>
            </div>
        </section>
    );
}
