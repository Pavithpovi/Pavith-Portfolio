export default function Publications() {
    const certificates = [
        {
            icon: "fa-solid fa-certificate text-neon-blue",
            title: "Oracle Certified \"Generative AI\"",
            desc: "Advanced credential covering Generative model concepts, Prompting, and LLMs."
        },
        {
            icon: "fa-solid fa-certificate text-neon-teal",
            title: "Human Computer Interaction [NPTEL]",
            desc: "Completed prestigious academy course with a score of 95%."
        },
        {
            icon: "fa-solid fa-certificate text-neon-pink",
            title: "Introduction to Industry 4.0 [NPTEL]",
            desc: "Certified with 75% score on smart integration concepts."
        },
        {
            icon: "fa-solid fa-certificate text-neon-green",
            title: "Python 101 for Data Science - IBM",
            desc: "Foundations of data handling, NumPy, and Pandas scripting."
        },
        {
            icon: "fa-solid fa-certificate text-neon-yellow",
            title: "\"LCAT\" Internship test - Labmentix",
            desc: "Standardized developer assessment certifying core programming proficiency."
        }
    ];

    const cocurricular = [
        {
            icon: "fa-brands fa-google text-neon-blue",
            title: "Google Student Ambassador",
            desc: "Selected and active participant in the GSA Program, coordinating student tech campaigns (2026)."
        },
        {
            icon: "fa-solid fa-chart-line text-neon-green",
            title: "Gencraft '25",
            desc: "Presented the \"Stock Analysis System\" project, analyzing real-time financial metrics."
        },
        {
            icon: "fa-solid fa-database text-neon-teal",
            title: "30-Day Masterclass",
            desc: "Completed intense Data Analytics Masterclass training with NoviTech (2025)."
        }
    ];

    const extracurricular = [
        { year: "2025", icon: "fa-solid fa-people-group", text: "Flashmob Dance Winner" },
        { year: "2023", icon: "fa-solid fa-person-running", text: "High Jump Winner in Athlete Meet" },
        { year: "2014", icon: "fa-solid fa-chess-knight", text: "State Level Chess Winner" }
    ];

    return (
        <section id="publications" className="publications-section reveal">
            <div className="container">
                <div className="section-title-wrapper">
                    <h2 className="section-title">Publications & Certifications</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="pub-cert-grid">
                    {/* Publication Card */}
                    <div className="glass-card publication-card">
                        <div className="card-badge"><i className="fa-solid fa-book-open"></i> IEEE Research Paper</div>
                        <h3 className="pub-title">EDA : Multi-Class Classification of BMI Categories</h3>
                        <p className="pub-venue">Published in IEEE Conference, ICIDCA - 2025</p>
                        <p className="pub-desc">
                            Authored research paper analyzing BMI categorization using Multi-Class classification algorithms. Evaluated models including Logistic Regression, Support Vector Machines (SVM), Random Forest, and XGBoost, with specific applications targeted toward smart health suggestions.
                        </p>
                        <div className="pub-tags">
                            <span>Classification</span>
                            <span>XGBoost</span>
                            <span>Scikit-Learn</span>
                            <span>Data Analysis</span>
                        </div>
                    </div>

                    {/* Certifications Card */}
                    <div className="glass-card certificates-list-card">
                        <h3>Professional Credentials</h3>
                        <ul className="cert-list">
                            {certificates.map((cert, idx) => (
                                <li key={idx}>
                                    <div className="cert-icon"><i className={cert.icon}></i></div>
                                    <div className="cert-details">
                                        <h4>{cert.title}</h4>
                                        <p>{cert.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Co-curricular Section */}
                <div className="cocurricular-section mt-5">
                    <h3 className="sub-section-title">Co-Curricular Accomplishments</h3>
                    <div className="cocurricular-grid">
                        {cocurricular.map((item, idx) => (
                            <div key={idx} className="glass-card cocurricular-card">
                                <div className="cocurr-icon"><i className={item.icon}></i></div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Extra Curricular Section */}
                <div className="extracurricular-section mt-5">
                    <h3 className="sub-section-title">Beyond Code</h3>
                    <div className="extra-grid">
                        {extracurricular.map((item, idx) => (
                            <div key={idx} className="extra-item">
                                <span className="extra-year">{item.year}</span>
                                <span className="extra-text">
                                    <i className={item.icon}></i> {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
