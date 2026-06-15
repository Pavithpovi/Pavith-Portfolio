export default function Contact() {
    return (
        <section id="contact" className="contact-section reveal">
            <div className="container">
                <div className="section-title-wrapper">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="contact-grid">
                    {/* Contact (Phone) Card */}
                    <div className="glass-card contact-card">
                        <i className="fa-solid fa-phone"></i>
                        <h4>Contact</h4>
                        <p><a href="tel:+919345321695">+91 9345321695</a></p>
                    </div>

                    {/* Email Card */}
                    <div className="glass-card contact-card">
                        <i className="fa-solid fa-envelope"></i>
                        <h4>Email</h4>
                        <p><a href="mailto:pavithbabuji@gmail.com">pavithbabuji@gmail.com</a></p>
                    </div>

                    {/* LinkedIn Card */}
                    <div className="glass-card contact-card">
                        <i className="fa-brands fa-linkedin"></i>
                        <h4>LinkedIn</h4>
                        <p><a href="https://linkedin.com/in/spavith" target="_blank" rel="noopener noreferrer">linkedin.com/in/spavith</a></p>
                    </div>

                    {/* GitHub Card */}
                    <div className="glass-card contact-card">
                        <i className="fa-brands fa-github"></i>
                        <h4>GitHub</h4>
                        <p><a href="https://github.com/Pavithpovi" target="_blank" rel="noopener noreferrer">github.com/Pavithpovi</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
