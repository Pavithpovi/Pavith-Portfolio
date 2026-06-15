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
        <section id="hero" class="hero-section">
            <div class="container hero-container">
                <div class="hero-content">
                    <span class="hero-welcome">Welcome to my universe</span>
                    <h1 class="hero-name">PAVITH S</h1>
                    <div class="hero-subtitle-wrapper">
                        <span class="hero-subtitle">I'm a </span>
                        <span id="typewriter" class="typewriter-text">{typedText}</span>
                    </div>
                    <p class="hero-desc">
                        Passionate about crafting high-performance, visually striking, and responsive web applications with immersive interactive experiences.
                    </p>
                    <div class="hero-cta">
                        <button onClick={() => scrollToSection('projects')} class="btn btn-primary">
                            View Projects <i class="fa-solid fa-arrow-right"></i>
                        </button>
                        <button onClick={() => scrollToSection('contact')} class="btn btn-secondary">
                            Get In Touch
                        </button>
                    </div>
                    <div class="hero-socials">
                        <a href="https://github.com/Pavithpovi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/spavith" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="mailto:pavithbabuji@gmail.com" aria-label="Email">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                        <a href="tel:+919345321695" aria-label="Phone">
                            <i class="fa-solid fa-phone"></i>
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
            <div class="scroll-indicator">
                <span class="mouse-icon">
                    <span class="wheel"></span>
                </span>
                <span class="scroll-text">Scroll Down</span>
            </div>
        </section>
    );
}
