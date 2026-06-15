import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = document.querySelectorAll('section');
            let current = 'hero';
            sections.forEach(sec => {
                const sectionTop = sec.offsetTop;
                if (window.scrollY >= (sectionTop - 160)) {
                    current = sec.getAttribute('id');
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'profile', label: 'Profile' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'rexopro', label: 'Rexopro Concept' },
        { id: 'experience', label: 'Experience' },
        { id: 'publications', label: 'Publications' }
    ];

    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    const handleLinkClick = (id) => {
        setIsMobileOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#hero" onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }} className="nav-logo">
                    Pavith<span>.S</span>
                </a>
                <nav className={`nav-menu ${isMobileOpen ? 'active' : ''}`}>
                    {navItems.map(item => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            onClick={(e) => { e.preventDefault(); handleLinkClick(item.id); }}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className={`nav-link contact-btn-nav ${activeSection === 'contact' ? 'active' : ''}`}
                        onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
                    >
                        Contact
                    </a>
                </nav>
                <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
                    <i className={isMobileOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
                </button>
            </div>
        </header>
    );
}
