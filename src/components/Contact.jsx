import React, { useState } from "react";
import "./Contact.css";
import './Contact.css'

function ContactSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can add your own logic to handle the form submission, such as sending an email or saving the message to a database
        console.log(name, email, message);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contact-section" id="contact" >
            <div className="section-title">Contact Me</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactSection;
