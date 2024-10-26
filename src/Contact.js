import React from 'react';
import './style.css';

export default function Contact() {
    return (
        <div className="container">
            <div className="content">
                <h1 className="title">Get in Touch</h1>
                <p className="paragraph">
                We value your feedback, questions, and suggestions. Whether you have inquiries about our services, 
                need assistance, or simply want to share your thoughts, our team is here to help. Your input is important to us, 
                and we strive to provide timely and thoughtful responses. Thank you for reaching out!
                </p>

                <div className="details">
                    <h2 className="subtitle">Contact Information</h2>
                    <p className="paragraph">
                        <strong>Email:</strong> singlepage@webiste.react
                    </p>
                    <p className="paragraph">
                        <strong>Phone:</strong> 09123456789
                    </p>
                    <p className="paragraph">
                        <strong>Address:</strong> Quezon City, Philippines
                    </p>
                </div>
            </div>
        </div>
    );
}