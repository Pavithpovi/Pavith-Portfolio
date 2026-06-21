import { useEffect } from 'react';

const projectDetails = {
    animal_world: {
        title: "Rexopro Animal World",
        tags: "React.js • Tailwind CSS • Vercel Deployment • 3D Animal Catalog",
        date: "Completed In: 2026",
        desc: "An immersive digital book catalog showing wild animals in a moody, atmospheric, and forest estate style, bringing interactive luxury aesthetics to educational brand concepts.",
        highlights: [
            "Presents an ultra-minimalist, dark luxury web interface focused on animal biodiversity showcases.",
            "Implements fluid scrolling animations and subtle 3D hover effects for visual immersion.",
            "Deployed and hosted on Vercel for high performance and fast load times.",
            "Integrates custom image grids and descriptions matching the Rexopro luxury forest aesthetic."
        ]
    },
    microgrid: {
        title: "Self-Learning Microgrid Energy Optimization",
        tags: "Machine Learning • Python • Sci-kit Learn • Energy Optimization",
        date: "Completed In: 2026",
        desc: "Designed and engineered a machine learning model to analyze localized power generation (solar, wind), consumption demands, and local storage patterns within an electrical microgrid setup.",
        highlights: [
            "Leveraged real-time data inputs to dynamically optimize energy distribution curves.",
            "Implemented reinforcement learning scripts to predict and buffer grid shortage hours.",
            "Enabled substantial reductions in overall operational expenditures, saving up to 18% in cost overheads.",
            "Developed responsive status interfaces in Python for monitoring system health and efficiency rates."
        ]
    },
    fitness: {
        title: "Smart Workout & Fitness Suggestion Engine",
        tags: "React.js • Tailwind CSS • Health APIs • CSS Animations",
        date: "Completed In: 2025",
        desc: "Designed an interactive health advisor application providing user-personalized workout programs, target diet regimens, and modular indicators based on individual fitness goals.",
        highlights: [
            "Tailored workouts using localized classification models matching user fitness tiers.",
            "Supported daily metric indicators, including pedometer trackers and caloric indexes.",
            "Created responsive visual components that adapt fluidly between desktop browsers and mobile devices.",
            "Presented a co-aligned research paper detailing this system's architecture at an IEEE Conference (ICIDCA 2025)."
        ]
    },
    events: {
        title: "College Event Management Portal",
        tags: "HTML5/CSS3 • ES6 JavaScript • Relational Database (SQL)",
        date: "Completed In: 2024",
        desc: "Crafted a web-based system targeted to simplify planning, scheduling, and registration pipelines for university events and annual festivals.",
        highlights: [
            "Enables students to securely sign up, check schedules, and receive ticket conformations.",
            "Equipped administrators with robust panels to update events, details, and register attendees.",
            "Managed scheduling logs and security verification through optimized SQL data scripts.",
            "Dramatically reduced paperwork, automating invitation approvals and event capacity warnings."
        ]
    }
};

export default function Modal({ isOpen, projectKey, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen || !projectKey) return null;

    const data = projectDetails[projectKey];
    if (!data) return null;

    return (
        <div className={`modal-overlay active`} onClick={onClose}>
            <div className="glass-card modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close Modal">
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="modal-body">
                    <h3>{data.title}</h3>
                    <div className="modal-meta">
                        {data.tags} | <span>{data.date}</span>
                    </div>
                    <div className="modal-desc-title">Project Overview</div>
                    <p className="modal-desc-body">{data.desc}</p>
                    <div className="modal-highlights">
                        <h4>Key Implementations & Accomplishments</h4>
                        <ul>
                            {data.highlights.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
