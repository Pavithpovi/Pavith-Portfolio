import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Construct mailto link to open default email client pre-filled
        const mailToLink = `mailto:pavithbabuji@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
        
        window.location.href = mailToLink;
        
        // Reset form fields
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <section id="contact" className="contact-section reveal">
            <div className="container">
                <div className="section-title-wrapper">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="contact-grid">
                    {/* Contact detail cards */}
                    <div className="contact-info-panel">
                        <div className="glass-card contact-card">
                            <i className="fa-solid fa-envelope"></i>
                            <h4>Email Me</h4>
                            <p><a href="mailto:pavithbabuji@gmail.com">pavithbabuji@gmail.com</a></p>
                        </div>
                        <div className="glass-card contact-card">
                            <i className="fa-solid fa-phone"></i>
                            <h4>Call Me</h4>
                            <p><a href="tel:+919345321695">+91 9345321695</a></p>
                        </div>
                        <div className="glass-card contact-card">
                            <i className="fa-solid fa-location-dot"></i>
                            <h4>Based In</h4>
                            <p>Namakkal, Tamil Nadu, India</p>
                        </div>
                    </div>

                    {/* Form Panel */}
                    <div className="glass-card contact-form-wrapper">
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        required 
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        required 
                                        placeholder="john@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    required 
                                    placeholder="Collab proposal / Opportunity"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    rows="5" 
                                    required 
                                    placeholder="Hello Pavith, I would love to connect with you regarding..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-submit">
                                Send Message <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
