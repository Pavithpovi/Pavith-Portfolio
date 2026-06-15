import { useState, useEffect, useRef } from 'react';

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.15 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const categories = [
        {
            title: "Core Languages",
            icon: "fa-solid fa-code text-neon-blue",
            skills: [
                { name: "Python", level: "85%" },
                { name: "SQL", level: "80%" },
                { name: "HTML / CSS", level: "95%" }
            ]
        },
        {
            title: "Web Technologies",
            icon: "fa-solid fa-globe text-neon-teal",
            skills: [
                { name: "JavaScript", level: "80%" },
                { name: "Tailwind CSS", level: "90%" },
                { name: "Bootstrap", level: "85%" }
            ]
        },
        {
            title: "Frameworks & Design",
            icon: "fa-solid fa-layer-group text-neon-pink",
            skills: [
                { name: "React", level: "75%" },
                { name: "Angular", level: "60%" },
                { name: "Figma (UIUX Design)", level: "90%" }
            ]
        },
        {
            title: "Tools & Systems",
            icon: "fa-solid fa-toolbox text-neon-green",
            skills: [
                { name: "Git / GitHub", level: "85%" },
                { name: "DevOps Principles", level: "70%" },
                { name: "Database Systems (DBMS)", level: "80%" }
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section reveal" ref={sectionRef}>
            <div className="container">
                <div className="section-title-wrapper">
                    <h2 className="section-title">Technical Expertise</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="skills-grid">
                    {categories.map((cat, catIdx) => (
                        <div key={catIdx} className="glass-card skill-category-card">
                            <div className="skill-category-header">
                                <i className={cat.icon}></i>
                                <h3>{cat.title}</h3>
                            </div>
                            <div className="skill-list">
                                {cat.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx} className="skill-progress-bar">
                                        <div className="skill-info">
                                            <span>{skill.name}</span>
                                        </div>
                                        <div className="progress-track">
                                            <div 
                                                className="progress-fill" 
                                                style={{ width: isVisible ? skill.level : '0%' }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
