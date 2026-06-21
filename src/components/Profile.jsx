export default function Profile() {
    return (
        <section id="profile" className="profile-section reveal">
            <div className="container">
                <div className="section-title-wrapper">
                    <h2 className="section-title">Professional Profile</h2>
                    <div className="title-underline"></div>
                </div>
                
                <div className="profile-grid">
                    {/* Glassmorphic Main Card */}
                    <div className="glass-card profile-main">
                        <div className="profile-header">
                            <i className="fa-solid fa-user-astronaut profile-icon"></i>
                            <h3>About Me</h3>
                        </div>
                        <p className="profile-text">
                            An independent and self-motivated student looking for employment in the area of Software Development. I am passionate about building responsive web applications and applying programming skills to develop efficient software solutions.
                        </p>
                        <div className="personal-info-grid">
                            <div className="info-item">
                                <span className="info-label">D.O.B</span>
                                <span className="info-value">29.04.2005</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Location</span>
                                <span className="info-value">Namakkal, TN, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Glassmorphic Education Card */}
                    <div className="glass-card profile-education">
                        <div className="profile-header">
                            <i className="fa-solid fa-graduation-cap profile-icon"></i>
                            <h3>Education</h3>
                        </div>
                        <div className="edu-timeline">
                            <div className="edu-item">
                                <div className="edu-year">2023 - 2027</div>
                                <h4 className="edu-degree">B.Tech Information Technology</h4>
                                <p className="edu-institution">M.Kumarasamy College of Engineering, Karur</p>
                                <div className="edu-grade">CGPA: <strong>6.5</strong> / 10 <span className="grade-detail">(till 5th sem)</span></div>
                            </div>
                            <div className="edu-item">
                                <div className="edu-year">Secondary</div>
                                <h4 className="edu-degree">High School Leaving Certificate</h4>
                                <div className="edu-grade">Percentage: <strong>66.3%</strong></div>
                            </div>
                        </div>
                    </div>

                    {/* Glassmorphic Soft Skills & Interests */}
                    <div className="glass-card profile-meta">
                        <div className="profile-header">
                            <i className="fa-solid fa-chart-pie profile-icon"></i>
                            <h3>Core Attributes</h3>
                        </div>
                        <div className="meta-section">
                            <h4>Soft Skills</h4>
                            <div className="tag-cloud">
                                <span className="badge tag-soft">Decision Making</span>
                                <span className="badge tag-soft">Time Management</span>
                                <span className="badge tag-soft">Leadership</span>
                                <span className="badge tag-soft">Adaptation</span>
                            </div>
                        </div>
                        <div className="meta-section mt-4">
                            <h4>Areas of Interest</h4>
                            <div className="tag-cloud">
                                <span className="badge tag-interest">Web Designing</span>
                                <span className="badge tag-interest">Database Management</span>
                                <span className="badge tag-interest">Software Testing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
