import { useState, useEffect } from 'react';
import luxuryBg from '../assets/rexopro_luxury.png';

export default function Rexopro() {
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isFullscreen]);

    return (
        <section id="rexopro" className="rexopro-section reveal">
            <div className="container">
                <div className="section-title-wrapper">
                    <h2 className="section-title">Rexopro Brand Concept</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="glass-card rexopro-showcase-teaser">
                    <div className="teaser-grid">
                        <div className="teaser-content">
                            <span className="teaser-badge"><i className="fa-solid fa-gem"></i> Luxury Web Concept</span>
                            <h3>REXOPRO</h3>
                            <p className="teaser-slogan">"Architecture of Digital Luxury. Bridging High-End Aesthetics with Fullstack Engineering."</p>
                            <p className="teaser-desc">
                                A high-end pre-showcase built to demonstrate luxury brand styling. Featuring a dark, moody forest atmosphere, floor-to-ceiling modern glass estate grids, high-performance engines, and pristine ecosystem nodes.
                            </p>
                            <div className="fullstack-specs">
                                <span><i className="fa-solid fa-code"></i> React / ThreeJS</span>
                                <span><i className="fa-solid fa-server"></i> Node.js API Engines</span>
                                <span><i className="fa-solid fa-leaf"></i> Forest HSL Palette</span>
                            </div>
                            <button className="btn btn-primary btn-launch-rexopro" onClick={() => setIsFullscreen(true)}>
                                Launch Immersive Pre-Showcase <i className="fa-solid fa-expand"></i>
                            </button>
                        </div>
                        <div className="teaser-preview-frame">
                            <div className="preview-img-wrapper" onClick={() => setIsFullscreen(true)}>
                                <img src={luxuryBg} alt="Rexopro Brand Preview" className="preview-img" />
                                <div className="preview-overlay">
                                    <i className="fa-solid fa-play"></i>
                                    <span>Enter Concept Screen</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Immersive Rexopro Luxury Landing Overlay */}
            {isFullscreen && (
                <div className="rexopro-immersive-overlay">
                    {/* Immersive Header */}
                    <header className="rexopro-nav">
                        <div className="rexopro-nav-container">
                            <span className="rexopro-logo">REXOPRO</span>
                            <nav className="rexopro-menu">
                                <span>The Estate</span>
                                <span>The Engine</span>
                                <span>The Stables</span>
                            </nav>
                            <button className="rexopro-close" onClick={() => setIsFullscreen(false)}>
                                Exit Showcase <i className="fa-solid fa-compress"></i>
                            </button>
                        </div>
                    </header>

                    {/* Immersive Hero background */}
                    <div className="rexopro-hero" style={{ backgroundImage: `url(${luxuryBg})` }}>
                        <div className="rexopro-hero-overlay"></div>
                        <div className="rexopro-hero-content">
                            <span className="rexopro-hero-subtitle">PRE-SHOWCASE CONCEPT</span>
                            <h1 className="rexopro-hero-title">REXOPRO</h1>
                            <p className="rexopro-hero-slogan">
                                Minimalist Frontend. Monumental Backend.
                            </p>
                            <p className="rexopro-hero-desc">
                                We forge robust fullstack digital estates that operate like luxury sports cars and scale with the grace of pristine breeds.
                            </p>
                            
                            <div className="rexopro-cta-group">
                                <button className="rexopro-btn-lux">EXPLORE ARCHITECTURE</button>
                                <button className="rexopro-btn-dark" onClick={() => setIsFullscreen(false)}>RETURN TO PORTFOLIO</button>
                            </div>
                        </div>

                        {/* Interactive Features Grid */}
                        <div className="rexopro-grid-overlay">
                            <div className="rexopro-grid-card">
                                <span className="card-num">01</span>
                                <h4>THE ESTATE</h4>
                                <span className="card-tag">Frontend Architecture</span>
                                <p>Sleek dark stone structures, minimalist sans-serif typography, and floor-to-ceiling glass grids powered by Three.js.</p>
                            </div>
                            <div className="rexopro-grid-card">
                                <span className="card-num">02</span>
                                <h4>THE ENGINE</h4>
                                <span className="card-tag">High-Performance Backend</span>
                                <p>Optimized Node.js/Go database APIs that respond instantaneously, engineered to run like a sleek luxury sports car.</p>
                            </div>
                            <div className="rexopro-grid-card">
                                <span className="card-num">03</span>
                                <h4>THE STABLES</h4>
                                <span className="card-tag">Cloud Infrastructure</span>
                                <p>Pristine, secure, and isolated microservices running in managed Docker containers on a misty cloud lawn.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
