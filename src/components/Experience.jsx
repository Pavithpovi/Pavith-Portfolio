export default function Experience() {
    return (
        <section id="experience" className="experience-section reveal">
            <div className="container">
                <div className="section-title-wrapper">
                    <h2 className="section-title">Internships & Timeline</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="experience-timeline">
                    <div className="timeline-line"></div>

                    {/* Experience item 1 */}
                    <div className="timeline-item timeline-left">
                        <div className="timeline-dot"><i className="fa-solid fa-server"></i></div>
                        <div className="glass-card timeline-content">
                            <span className="timeline-date">2025</span>
                            <h3 className="timeline-role">DevOps Intern</h3>
                            <h4 className="timeline-company">Digital Graps</h4>
                            <p className="timeline-desc">
                                Learned core DevOps principles and assisted in implementing continuous integration and deployment pipelines. Worked with Git for source code control and automated deployment structures to streamline development pipelines.
                            </p>
                            <div className="timeline-tags">
                                <span className="badge">Git</span>
                                <span className="badge">CI/CD</span>
                                <span className="badge">Automation</span>
                            </div>
                        </div>
                    </div>

                    {/* Experience item 2 */}
                    <div className="timeline-item timeline-right">
                        <div className="timeline-dot"><i className="fa-solid fa-compass-drafting"></i></div>
                        <div className="glass-card timeline-content">
                            <span className="timeline-date">2025</span>
                            <h3 className="timeline-role">UI/UX Design Intern</h3>
                            <h4 className="timeline-company">SDLC Experience</h4>
                            <p className="timeline-desc">
                                Created user-centered interface wireframes, interactive high-fidelity mockups, and prototypes using Figma. Gained experience in aligning UI designs with technical requirements across the Software Development Life Cycle.
                            </p>
                            <div className="timeline-tags">
                                <span className="badge">Figma</span>
                                <span className="badge">Wireframes</span>
                                <span className="badge">Prototyping</span>
                                <span className="badge">SDLC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
