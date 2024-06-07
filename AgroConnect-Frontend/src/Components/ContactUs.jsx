import React from 'react';
import "./style/ContactUs.css";

function ContactUs() {
    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <div className="contact-names">
                <div className="name-slot">Akshay</div>
                <div className="name-slot">Amogh</div>
                <div className="name-slot">Anubhav</div>
                <div className="name-slot">Ankush</div>
            </div>
            <div className="contact-email">
                <p>Email: <a href="mailto:AgroConnect@gmail.com">AgroConnect@gmail.com</a></p>
            </div>
        </div>
    );
}

export default ContactUs;
